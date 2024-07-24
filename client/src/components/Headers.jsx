import React, { useEffect, useState } from 'react'
import semicircle from '../assets/semicircle.svg'

function Headers({ title, size }) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className=' flex  items-center justify-center space-x-[2%]'>
      <div className='py-12'><img src={semicircle} alt="" /></div>
      {viewportWidth >= 768 ? <div className='fonts-[poppins] font-medium w-fit uppercase text-[#818172]' style={{ fontSize: size }}>{title}</div> : <div className='fonts-[poppins] font-medium w-fit uppercase text-[#818172]' style={{ fontSize: size }} >{title}</div>}

      <div className='py-12'><img src={semicircle} alt="" /></div>

    </div>
  )
}

export default Headers
