import React, { useEffect, useState } from 'react';
import Game from './Game';
import io from 'socket.io-client';
import './App.css';
import MainMenu from './MainMenu';
import Title from './Title';
import Loader from './Loader';


function App() {
  const [gameData, setGameData] = useState(null);
  const [myId, setMyId] = useState(null);
  const [tab, setTab] = useState('menu');
  const [winData, setWinData] = useState(null);
  const [opponentLeft, setOpponentLeft] = useState(false);
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const playGame = (user) => {
    socket.emit("join", user);
  }

  const updateMyMove = (pos) => {
    const newGameData = {...gameData};
    newGameData.board[pos] = gameData.symbol[myId];
    newGameData.turn = getOpponentId();
    setGameData(newGameData);
    socket.emit('update-move', newGameData);
  }

  const joinPrivate = (playerName, roomName) => {
    // console.log(playerName, roomName);
    socket.emit("private-room-join", {playerName, roomName})
  }

  const getOpponentId = () => {
    if(gameData.players[0] === myId){
      return gameData.players[1];
    }else{
      return gameData.players[0];
    }
  }
  
  useEffect(() => {
    const socket= io.connect("http://localhost:3001");
    if(socket){
      setSocket(socket);
    }
    return () => {
      socket.disconnect();
    }
  }, [refresh])


  useEffect(() => {
    if(!socket) return;

    socket.on('your-id', (data) => {
      console.log(data);
      setMyId(data);
    });

    socket.on('game-instance', gd => {
      console.log(gd);
      if(opponentLeft){
        setOpponentLeft(false);
      }
      if(gd.active){
        setGameData(gd);
        setTab('game');
      }
      if(!gd.active && gd.type === 'private'){
        setMessage(`Waiting for your friends to Join '${gd?.roomName}'`);
        setTab('matching');
      }
      if(!gd.active && gd.type === 'public'){
        setMessage('Waiting for Someone to Join');
        setTab('matching');
      }
    })
    socket.on('catch-move', gd => {
      if(gd.active){
        setGameData(gd);
      }
    })
    socket.on('game-over', winData => {
      console.log(winData);
      setWinData(winData);
    })

    socket.on('starting-new-game', gd => {
      console.log(gd);
      if(gd.active){
        setWinData(null);
        setGameData(gd);
      }
    })

    socket.on('room-full', roomName => {
      console.log(roomName);
      alert(`No more space in '${roomName}' Room`);
    })

    socket.on('opponent-left', () => {
      setOpponentLeft(true);
      setTimeout(() => {
        if(gameData?.type === 'private'){
          setMessage(`Waiting for your friends to Join '${gameData?.roomName}'`)
        }else{
          setMessage(`Waiting for Someone to Join`)
        }
        setTab('matching')
        setOpponentLeft(false);
      }, 2000)
    })
  }, [socket])

  const exitFunct = () => {
    console.log('hello')
    setRefresh(!refresh);
    // setGameData(null);
    // setOpponentLeft(false);
    // setWinData(null);
    // setMessage('');
    setTab('menu')
  }
  

  return (
    <div className="App">
      <Title/>
      <div className="section">
        {tab === 'menu' && <MainMenu playGame={playGame} joinPrivate={joinPrivate}/> }
        {tab === 'matching' && <Loader exitFunct={exitFunct} message={message}/>}
        {tab === 'game' && <Game exitFunct={exitFunct} opponentLeft={opponentLeft} gameData={gameData} myId={myId} opponentId={getOpponentId()} updateMyMove={updateMyMove} winData={winData} />}
      </div>
    </div>
  );
}

export default App;
