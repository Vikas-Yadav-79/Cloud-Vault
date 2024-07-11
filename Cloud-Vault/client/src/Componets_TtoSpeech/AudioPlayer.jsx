import React, { useEffect, useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaRegPauseCircle } from 'react-icons/fa';
import { BiSolidDownload } from 'react-icons/bi';

export function AudioPlayer({ audio }) {
  const audioRef = useRef();
  const progresbar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currenttime , setCurrenttime]= useState(0);
  const [duration,setDuration] = useState(0);

  const updateProgressbar = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const progress = (audioElement.currentTime / audioElement.duration) * 100;
      setCurrenttime(audioElement.currentTime);
      progresbar.current.style.width = `${progress}%`;
    }
  };
  
  
  
  const downloadAudio = () => {
    const audioUrl = audioRef.current.src;
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = 'audio.mp3';
    link.click();
  };


  useEffect(() => {
    if (audio) {
      const audioArrayBuffer = audio.AudioStream.buffer;
      const audiourl = URL.createObjectURL(new Blob([audioArrayBuffer], { type: 'audio/mpeg' }));

      const audioElement = audioRef.current;
      audioElement.src = audiourl;

      audioElement.addEventListener('loaddata' ,() =>{
        setDuration(audioElement.duration); 

      })


      audioElement.addEventListener('timeupdate',updateProgressbar)

      return () => {
        URL.revokeObjectURL(audiourl);
      };
    }
  }, [audio]);

  const togglePlayPause = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='audio-container'>
      <audio ref={audioRef} />
      <div className='progress'>
        <div  className='progress-bar'
        style={{width: `${(currenttime/duration) *100}%`}}
        ref={progresbar}/>
      </div>
      <div>

        <button onClick={togglePlayPause} className='but-Class' disabled={!audio}>
          {isPlaying ? <FaRegPauseCircle className='icon-btn'/> : <FaPlay className='icon-btn' />}
        </button>
        <button onClick={() => downloadAudio()} className='but-Class' disabled={!audio} >
        <BiSolidDownload className='icon-btn'/>
        </button>
      </div>
    </div>
  );
}
