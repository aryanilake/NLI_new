import React from 'react'
import semicircle from '../assets/semicircle.svg'

function Headers({title}) {
  return (
    <div className=' flex  items-center justify-center space-x-[2%]'>
      <div className='py-12'><img  src={semicircle} alt=""  /></div>
      <div className='fonts-[poppins] font-medium w-fit text-5xl md:text-8xl  uppercase text-[#818172]'>{title}</div>
      <div className='py-12'><img  src={semicircle} alt=""  /></div>

    </div>
  )
}

export default Headers
