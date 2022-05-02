import React, { useState } from 'react';
import './MainMenu.css';

export default function MainMenu({ playGame, joinPrivate}) {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleRoomNameChange = (event) => {
    const length = event.target.value.length;
    if(event.target.value.charAt(length-1) === ' '){
      setRoomName(roomName);
      return;
    }
    setRoomName(event.target.value);
  }

  const play = () => {
    if(userName.length <3){
      alert('Player Name is too short!');
      return;
    }
    playGame(userName);
  }

  const playWithFriend = () => {
    if(userName.length <3){
      alert('Player Name is too short!');
      return;
    }
    if(roomName.length <3){
      alert('Room Name is too short!');
      return;
    }
    joinPrivate(userName, roomName);
  }
  return (
      <div className='main-menu'>
        <input value={userName} onChange={handleNameChange} className='name-box' type="text" placeholder='Enter Your Name'/>
        <input value={roomName} onChange={handleRoomNameChange} className='name-box' type="text" placeholder='Enter Room Name'/>
        <button onClick={play} className='play-button'>Play </button>
        <button onClick={playWithFriend} className='play-button'>Join Room</button>
      </div>
  )
}
