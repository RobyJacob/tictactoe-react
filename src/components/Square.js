function Square({ value, clickHandler, isWinning }) {
    return (
      <button className='square' 
        onClick={ clickHandler }
        style={{ backgroundColor: isWinning ? 'green' : '' }}>
        { value }
      </button>
    )
}

export default Square