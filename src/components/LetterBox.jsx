import React from 'react'
import "./LetterBox.css"

const LetterBox = ({correct, letter}) => {
  return (
    <>
    <div className='letterBox' style={{borderBottomColor: correct? "green": "black"}}>
      {correct? letter: "?"}
    </div>
    </>
  )
}

export default LetterBox