import React, { useEffect, useRef, useState } from 'react'
import { getUrl,uploadFile } from '../services/service';


export default function Home() {
    const inputref = useRef();
    const [url, setUrl] = useState('');
    const [file, setFile] = useState('');

    useEffect(() => {
        const getData = async () => {
            const data = await getUrl();
            console.log(data.url);
            setUrl(data.url);


        }
        getData();
    }, [])

    useEffect(() => {
        const getFile = async () => {

            if (file) {
                await uploadFile(url, file);
                setUrl(url.split('?')[0]);
            }
        }
        getFile();
    }, [file])
    return (
        <div className='Container'>
            <h1>CloudVault</h1>
            <p>Convenient file sharing in three steps without registration.</p>
            <p><span>1</span>
                <input type="file"
                    ref={inputref}
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button onClick={() => inputref.current.click()}>Select Files to Upload</button> or drag-and-drop files into this browser window.</p>
            <p><span>2</span> The file uploads will begin. Wait until they complete.</p>
            <p><span>3</span> Copy the Link <a href={url.split('?')[0]}>{url.split('?')[0]}</a> and share it with your friends.</p>
            <p className='info'>Uploaded files can be deleted manually at any time and will in any case be deleted automatically 6 days from now.</p>


            {file && <img src={url} alt="Your File is Here"  style={{width:'50%'}}/>}
        </div>
    )

}
