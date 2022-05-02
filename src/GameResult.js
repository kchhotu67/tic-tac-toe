import React from 'react'
import './GameResult.css';

function GameResult({message}) {
  return (
    <div className='gameResult'>
      <div className='message'>
        {
          message.length > 0 ? <div className='text'>{message}</div>: null
        }
        <div className='text'>Game Over</div>
      </div>
    </div>
  )
}

export default GameResult 