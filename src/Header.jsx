import React from 'react'

function Header() {
  return (
    <div className='w-full h-[25vh] flex justify-center content-center flex-wrap'>
        <h1 className='w-full text-blue-600 text-[35px] font-bold flex justify-center items-center'>Contact App</h1>
        <h3 className='w-full flex justify-center items-center my-[15px]'>
            <span className='text-blue-600 bg-blue-200 rounded-[5px] p-[6px] mr-[5px]'> Saba Aghajani </span>
            <span className='text-[#2d2d2d]'> | Frontend Developer</span>
        </h3>
    </div>
  )
}

export default Header