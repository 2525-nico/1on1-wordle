import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'
import Enter from './components/Enter'
import LiveCommentary from './components/LiveCommentary'

function App() {

  // word that was entered or predicted just now
  const [word, setWord] = useState("")
  // how much the game progresses
  const [step, setStep] = useState(0)
  // player1 password
  const [password1, setPassword1] = useState("?????")
  // player2 password
  const [password2, setPassword2] = useState("?????")
  // a flag to indicate who won the game
  const [win, setWin] = useState("")
  // tell the game condition
  const [liveCommentary, setLiveCommentary] = useState("player1 setting his password")

  // console.log("word", word)
  // console.log("step", step)

  useEffect(()=>{
    if (step ==0) {}
    else if (step==1) {
      console.log("player1 password received: ", word)
      setPassword1(word)
      setLiveCommentary("player2 setting his password")
    }
    else if (step==2) {
      console.log("player2 password received: ", word)
      setPassword2(word)
      setLiveCommentary("Let's get started!")
    }
    else {
      setLiveCommentary(`player${step%2}'s turn`)
    }
    // console.log("step: ", step)
  },
  [step])

  useEffect(() => {
    if (win == "player1") {
      setLiveCommentary("Player1 predicted perfectly and player2 need to complete in the next turn!!!")
    }
    else if (win == "player2") {
      setLiveCommentary("Player2 predicted perfectly!! Winner is player2")
    }
    else if (win == "player1player2") {
      setLiveCommentary("player1 and player2 made prediction completed!! This game is draw! GOOD GAME")
    }
  },
  [win])

  const resetGame = () => {
    setStep(0)
    setPassword1("?????")
    setPassword2("?????")
    setWin("")
    setLiveCommentary("player1 setting his password")
  }


  return (
    <>
      <header>
        <h1>1on1 WORDLE PLAY</h1>
      </header>
      <main>
        <div id='vs'>
          <Player number="1" password={password1} step={step} word={word} setWin={setWin}></Player>
          <Player number="2" password={password2} step={step} word={word} setWin={setWin}></Player>
        </div>
        <div id='enter'>
          <Enter step={step} onClick={[setWord, setStep]}></Enter>
        </div>
        <LiveCommentary liveCommentary={liveCommentary} win={win} resetGame={resetGame}></LiveCommentary>
      </main>
    </>
  )
}

export default App
