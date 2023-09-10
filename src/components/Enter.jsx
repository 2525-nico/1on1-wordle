import React, { useState } from 'react'
import "./Enter.css"

const Enter = ({step, onClick}) => {

  const [setWord, setStep] = onClick

  // the word entered in the input field now
  const [now, setNow] = useState("")

  const handleInput = () => {
    setWord(now)
    setStep(prev => prev + 1)
    setNow("")
  }

  const passwordEntering = step==0||step==1


  return (
    <>
    <input type={passwordEntering? "password": "text"} onChange={(e)=>{setNow(e.target.value)}} value={now} placeholder={passwordEntering? 'enter a 5-letter password': "enter a 5-letter word"}/>
    <button onClick={handleInput}>{passwordEntering? "okay!": "predict!"}</button>
    </>
  )
}

export default Enter