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
      onPlay(newSquares)
    }
  
    const status = winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O')
    
    const setUp = (() => {
        const board = []
        const squareComps = [[], [], []]
        
        for (let i = 0; i < 9; i++) {
            squareComps[i % 3].push(<Square value={ squares[i] } clickHandler={ () => handleClick(i) } />)
        }

        for (let i = 0; i < 3; i++) {
            board.push(<div className='board-row'> { squareComps[i] } </div>)
        }

        return board
    })()

    return (
      <>
        <div className='status'> { status } </div>
        { setUp }
      </>
    )
}

export default Board