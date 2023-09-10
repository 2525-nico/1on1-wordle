import React, { useState, useEffect} from 'react'
import Show from './Show'

const Player = ({number, password, word, step, setWin}) => {

  const [correctList, setCorrectList] = useState([false, false, false, false, false])
  const [concludedList, setConcludedList] = useState([])

  useEffect(()=>{
    if (step == 0) {setCorrectList([false, false, false, false, false])}
    if (step%2 != Number(number)%2 && step!=1 && step!=2) {
      for (let i = 0; i < 5; i++) {
        if (password.charAt(i) == word.charAt(i)) {
          setCorrectList(prev => {
            const updated = [...prev]
            updated[i] = true
            return updated
          })
        }
        else if (password.includes(word.charAt(i))) {
          setConcludedList(prev => {
            prev.push(word.charAt(i))
            return [...new Set(prev)].sort() // datatype "Set" removes duplicates
          })
        }
      }
    }
  }, [step])

  useEffect(()=>{
    const opposition = number=="1"? "2": "1"

    // win condition
    if (correctList.every((value) => value === true)) {
      setWin(prev => prev + "player"+opposition)
      console.log("win changed to "+"player"+opposition)
    }
    // else {
    //   console.log("pass")
    // }
  }, [correctList])

  return (
    <>
      <Show number={number} password={password} correctList={correctList} concludedList={concludedList}></Show>
    </>
  )
}

export default Player