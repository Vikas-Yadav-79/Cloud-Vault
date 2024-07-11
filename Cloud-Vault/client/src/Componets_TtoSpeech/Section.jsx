import React, { useState } from 'react'
import  '../App.css'

export const Section = ({text,setText,ConvertTextToSpeech}) => {
  return (
    <div className='section-container'>
    <textarea value = {text} onChange={(e)=>{setText(e.target.value)}}/>
    <button onClick={()=>ConvertTextToSpeech()}> Convert to Speech</button>
    <p>What You Are Typing : {text}</p>
    </div>
  )
}
