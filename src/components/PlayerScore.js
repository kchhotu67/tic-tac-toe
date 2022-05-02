import React from 'react';
import './GameScore.css';

function PlayerScore({gameData, myId }) {
  return (
    <div className='item1'>
      <span>{gameData[myId]} </span>
      <span >{gameData?.result[myId]}</span> 
    </div>
  )
}

export default PlayerScore