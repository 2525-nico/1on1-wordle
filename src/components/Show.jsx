import React from 'react'
import LetterBox from './LetterBox'
import "./Show.css"

const Show = ({number, password, correctList, concludedList}) => {
  return (
    <div className='show' id={'show'+number}>
      <div style={{display: 'inline-block', marginBottom: '10%', fontSize: "x-large"}}>player{number}'s password</div>
      <div id={"letterBoxes"+number} className='letterBoxes'>
        <LetterBox correct={correctList[0]} letter={password.charAt(0)}></LetterBox>
        <LetterBox correct={correctList[1]} letter={password.charAt(1)}></LetterBox>
        <LetterBox correct={correctList[2]} letter={password.charAt(2)}></LetterBox>
        <LetterBox correct={correctList[3]} letter={password.charAt(3)}></LetterBox>
        <LetterBox correct={correctList[4]} letter={password.charAt(4)}></LetterBox>
      </div>
      <div className="concluded">concluded: {concludedList.join(" ")}</div>
    </div>
  )
}

export default Show