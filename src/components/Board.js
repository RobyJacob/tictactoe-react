import Square from './Square'

function calculateWinner(squares) {
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 6],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
        let [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
    }

    return null
}

function Board({ xIsNext, squares, onPlay }) {
    const winner = calculateWinner(squares)
  
    const handleClick = i => {
      if (squares[i] || winner) return;
      const newSquares = squares.slice()
      newSquares[i] = xIsNext ? 'X' : 'O'
      console.log(newSquares)
      onPlay(newSquares)
    }
  
    const status = winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O')
  
    return (
      <>
        <div className='status'> { status } </div>
        <div className='board-row'>
          <Square value={ squares[0] } clickHandler={ () => handleClick(0) }/>
          <Square value={ squares[1] } clickHandler={ () => handleClick(1) }/>
          <Square value={ squares[2] } clickHandler={ () => handleClick(2) }/>
        </div>
  
        <div className='board-row'>
          <Square value={ squares[3] } clickHandler={ () => handleClick(3) }/>
          <Square value={ squares[4] } clickHandler={ () => handleClick(4) }/>
          <Square value={ squares[5] } clickHandler={ () => handleClick(5) }/>
        </div>
  
        <div className='board-row'>
          <Square value={ squares[6] } clickHandler={ () => handleClick(6) }/>
          <Square value={ squares[7] } clickHandler={ () => handleClick(7) }/>
          <Square value={ squares[8] } clickHandler={ () => handleClick(8) }/>
        </div>
      </>
    )
}

export default Board