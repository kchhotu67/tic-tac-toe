import React from 'react'
import './PlayerSymbol.css';

const PlayerSymbol = ({gameData, myId }) => {
  return (
    <div className='item'>
      <span >{gameData?.symbol[myId]}</span> 
    </div>
  )
}

export default PlayerSymbol;