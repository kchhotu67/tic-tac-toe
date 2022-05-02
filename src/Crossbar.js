import React, { useEffect, useState } from 'react'

export default function Crossbar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if(width < 100){
      setTimeout(() => {
        setWidth(width + 1);
      }, 10)
    }
  }, [width])
  
  return (
    <div className='loading-bar' style={{width: `${width}%`, backgroundColor: '#cfb313', height: '100%'}}></div>
  )
}
