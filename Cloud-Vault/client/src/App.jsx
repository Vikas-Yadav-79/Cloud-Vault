import { Header } from "./Componets_TtoSpeech/Header"
import { Section } from "./Componets_TtoSpeech/Section"
import Home from "./Pages/Home"
import { useState } from "react"
import AWS from 'aws-sdk';
import {AudioPlayer} from "./Componets_TtoSpeech/AudioPlayer";
// import { Buffer } from 'buffer';
// window.Buffer = Buffer;


// import AWS from 'aws-sdk/global';
// import Polly from 'aws-sdk/clients/polly';
// import "./App.css"


// AWS.config.update({
//   region: process.env.AWS_REGION,
//   accessKeyId: process.env.AWS_SECRETACCESSKEY,
//   secretAccessKey: process.env.AWS_ACCESSKEYID,
// });

AWS.config.update({
  region: import.meta.env.VITE_AWS_REGION,
  accessKeyId: import.meta.env.VITE_AWS_ACCESSKEYID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRETACCESSKEY,
});


const polly = new AWS.Polly()


function App() {
  const [text, setText] = useState("");
  const [audio,setAudio] = useState("")


  const ConvertTextToSpeech = () => {
    polly.synthesizeSpeech({
      Text: text,
      OutputFormat: "mp3",
      VoiceId: "Matthew",
    },
      (err, data) => {
        if (err) {
          console.log(err)
        }
        else {
          console.log(data)
          setAudio(data)
          // const audioURL = URL.createObjectURL(data.AudioStream)
          // console.log(audioURL)
        }
      }
    )



  }

  return (
    <>

      <Home />
      {/* ------------------------------------------------------------------------- */}
      {/* Content of text to speech */}
      <div className="header">
        <Header />
        <Section text={text} setText={setText} ConvertTextToSpeech={ConvertTextToSpeech} />
      </div>

      <AudioPlayer audio={audio}/>

    </>
  )
}

export default App
