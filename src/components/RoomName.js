import React from 'react'
import './RoomName.css'

function RoomName({gameData}) {
  if(gameData.type === 'public' ){
    return null;
  }
  return (
    <div className='room-name'>
      Room : {gameData.roomName}
    </div>
  )
}

export default RoomName