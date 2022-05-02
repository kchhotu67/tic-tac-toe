import React from 'react'

function PlayerTurn({gameData, myId, opponentId}) {
  return (
    <h1 style={{height: '150px', textAlign: 'center',textTransform: 'capitalize', marginTop: '50px', color: `${gameData.turn === myId ? 'rgb(207, 179, 19)': 'white'}`}}>{gameData.turn === myId ? 'Your Turn': `${gameData[opponentId]} Turn`} </h1>
    
  )
}

export default PlayerTurn