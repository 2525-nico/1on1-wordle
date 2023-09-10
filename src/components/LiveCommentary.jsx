import React from 'react'

const LiveCommentary = ({liveCommentary, win, resetGame}) => {

  const gameEnded = win == "player2" || win == "player1player2"


  return (
    <div className="liveCommentary">live comment: {liveCommentary}{gameEnded? <button onClick={resetGame}>next game?</button> : undefined}</div>
  )
}

export default LiveCommentary