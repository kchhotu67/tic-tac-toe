import React, { useEffect, useState } from 'react'
import Crossbar from './Crossbar'
import WinAnim from './WinAnim';

function Board({winData, gameData, handlePlayerInput}) {
  const [showAnim, setShowAnim] = useState(false);
  useEffect(() => {
    if(winData && winData.winner){
      console.log('showing winning animation');
      setTimeout(() => {
        setShowAnim(true);
      }, 2000)
    }else{
      setShowAnim(false);
    }
  
  }, [winData])

  const renderBoard = () => {
    return (
      <>
        <div className='game'>
        {winData && (
          <div className={winData.crossLine}>
          <Crossbar/>
        </div>
        )}
        
        <div className="row">
          <div className="box bLeft bTop" onClick={ () => {handlePlayerInput('one')}}>{gameData.board.one}</div>
          <div className="box bTop" onClick={ () => {handlePlayerInput('two')}}>{gameData.board.two}</div>
          <div className="box bTop bRight" onClick={ () => {handlePlayerInput('three')}}>{gameData.board.three}</div>
        </div>
        <div className="row">
          <div className="box bLeft" onClick={ () => {handlePlayerInput('four')}}>{gameData.board.four}</div>
          <div className="box" onClick={ () => {handlePlayerInput('five')}}>{gameData.board.five}</div>
          <div className="box bRight" onClick={ () => {handlePlayerInput('six')}}>{gameData.board.six}</div>
        </div>
        <div className="row">
          <div className="box bBottom bLeft" onClick={ () => {handlePlayerInput('seven')}}>{gameData.board.seven}</div>
          <div className="box bBottom" onClick={ () => {handlePlayerInput('eight')}}>{gameData.board.eight}</div>
          <div className="box bRight bBottom" onClick={ () => {handlePlayerInput('nine')}}>{gameData.board.nine}</div>
        </div>
      </div>
      </>
    )
  }

  const renderAnimation = () => {
    return (
      <WinAnim symbol={gameData.symbol[winData?.winner]}/>
    )
  }
  
  return (
    <>
      {showAnim && renderAnimation()}
      {!showAnim && renderBoard() }
    </>
  )
}

export default Board