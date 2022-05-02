import React from 'react';
import Board from './Board';
import GameResult from './components/GameResult';
import PlayerScore from './components/PlayerScore';
import PlayerSymbol from './components/PlayerSymbol';
import PlayerTurn from './components/PlayerTurn';
import RoomName from './components/RoomName';
import './Game.css';
const Game = ({myId, opponentId,  gameData, updateMyMove, winData, opponentLeft, exitFunct}) => {
  console.log(gameData)
  const handlePlayerInput = (pos) => {
    if(gameData.turn !== myId || winData){
      return;
    }
    if(gameData.board[pos] !== ''){
      alert(`Invalid Move!, ${myId} try again.`);
    }else{
      updateMyMove(pos);
    }
  }
  if(!gameData || !myId || !opponentId){
    return null;
  }

  
  return (
    <div className='game-container'>
      <div className='symbol-score'>
        <PlayerSymbol gameData={gameData} myId={myId} />
        <PlayerSymbol gameData={gameData} myId={opponentId} />
      </div>
      <button className='exit-button' onClick={exitFunct}>Exit</button>

      <RoomName gameData={gameData}/>

      <div className='player-score'>
        <PlayerScore gameData={gameData} myId={myId} />
        <PlayerScore gameData={gameData} myId={opponentId} />
      </div>
      
      <Board winData={winData} handlePlayerInput={handlePlayerInput} gameData={gameData}/>
      {opponentLeft && (
        <div style={{height: '150px', marginTop:'50px', textAlign: 'center',textTransform: 'capitalize',color: 'white', }}>
        <h1 style={{textTransform: 'capitalize',fontSize: '24px', fontWeight: 'bold'}}>{`${gameData[opponentId]} has Left the Game!`} </h1>
        <h1 style={{textAlign: 'center',textTransform: 'capitalize', color: 'white', fontSize: '20px', fontWeight: 'normal'}}>Redirecting to Waiting Room... </h1>
      </div>
      )}
      {!opponentLeft && !winData && gameData.active && (
        <PlayerTurn gameData={gameData} myId={myId} opponentId={opponentId}/>
      )}
      {!opponentLeft && winData && (
        <GameResult 
          gameData={gameData} 
          myId={myId} 
          opponentId={opponentId} 
          winData={winData}
        />
      )}
    </div>
  )
  
}

export default Game;