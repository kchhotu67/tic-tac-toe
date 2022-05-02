import React, { useEffect, useState } from 'react'
import './Loader.css';
function Loader({message, exitFunct}) {
  const [dot, setDot] = useState('');

  useEffect(() => {
    if(dot.length === 3){
      setTimeout(() => {
        setDot('');
      }, 400);
    }else{
      setTimeout(() => {
        setDot(dot+'.');
      }, 400);
    }
  }, [dot])
  
  return (
    <div className='loader-container' >
      <div>{message} {dot}</div>
      <button className='back-button' onClick={exitFunct}>Exit</button>
    </div>
  )
}

export default Loader   