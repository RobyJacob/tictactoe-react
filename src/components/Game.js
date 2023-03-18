import { useState } from 'react'
import '../App.css'
import Board from './Board'

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [curMove, setCurMove] = useState(0)

  function handlePlay(nextSquares) {
    const nextHistory = [...history, nextSquares]
    setHistory(nextHistory)
    setCurMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
        if (move === curMove) description = 'You are at move #' + move
        else description = 'Go to move #' + move
    } else {
        description = 'Go to game start'
    }

    return (
      <li>
      {
        move === curMove ?
        <p> { description } </p> : 
        <button onClick={ () => jumpTo(move) }> { description } </button>
      }
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={ curMove % 2 === 0 } squares={ history[curMove] } onPlay={ handlePlay }/>
      </div>
      <div className='game-info'>
        <ol> { moves } </ol>
      </div>
    </div>
  )
}

export default Game