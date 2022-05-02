import React from 'react'

function GameResult({gameData, winData, myId, opponentId}) {
  return (
    <>
      <div style={{height: '150px', marginTop:'50px', textAlign: 'center',textTransform: 'capitalize',color: 'white', }}>
          <h1 style={{textTransform: 'capitalize',fontSize: '24px', fontWeight: 'bold'}}>{winData.winner.length > 0 ? (
          winData.winner === myId ? 'You Won!': `${gameData[opponentId]} won!`
        ) : 'Game Draw!'} </h1>
        <h1 style={{textAlign: 'center',textTransform: 'capitalize', color: 'white', fontSize: '20px'}}>Loading New Game...</h1>
      </div>
    </>
  )
}

export default GameResult