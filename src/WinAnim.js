import React, { useEffect, useState } from 'react'


function WinAnim({symbol}) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    if(scale < 10){
      setTimeout(() => {
        setScale(scale + 0.25);
      }, 20)
    }
  }, [scale])
  return (
    <div className='winAnim' style={{minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center',fontSize:'20px', transform: `scale(${scale})`, fontWeight: 'bold', color: 'white'}}> {symbol} </div>
  )
}

export default WinAnim