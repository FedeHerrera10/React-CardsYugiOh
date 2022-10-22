import React from 'react'
import Logo from '../assets/logo.png'
export const Header = () => {
  return (
    <div className='text-white flex justify-center mx-2 pt-4'>
      <img src={Logo} alt="logo" className='w-5/6 ' />
    </div>
  )
}
