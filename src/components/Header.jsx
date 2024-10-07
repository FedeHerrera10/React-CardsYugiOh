import React from 'react'
import Logo from '../assets/logo.png'
export const Header = () => {
  
return (
<div className='mt-10 text-white flex flex-col content-center justify-center mx-2'>
      <img src={Logo} alt="logo" className='w-64 sm:w-72 md:w-80 lg:w-96 mx-auto' />
        <h1 className='text-2xl md:text-3xl mt-4 mb-1 font-bold xl:text-4xl'>YuGiOh Search </h1>
        <p className='text-md'>search for your favorite card by name </p>
    </div>
  )
}
