import React from 'react'
import {Outlet } from 'react-router-dom'
import { FormCards } from './FormCards'
import { Header } from './Header'

/* -- -------------Class Tailwindcss -----------------*/

const divContainer=`flex justify-center items-center
flex-col lg:flex-row lg:justify-center
lg:items-center`;

const divOne = `w-full max-w-md lg:w-1/3 lg:max-w-none
  lg:border-r lg:h-screen
lg:border-r-purple-700  pt-2`;

const divTwo=`w-full px-5 pb-9 
flex-col lg:px-0 lg:h-screen flex justify-center lg:justify-start
lg:overflow-scroll lg:overflow-x-hidden lg:overflow-y-auto`;

/* ------------------------------------------------- */

export const Layout = () => {

 return (
    <div className={divContainer}>
      <div className={divOne}>
        <Header/>
        <FormCards/>
      </div>

      <div className={divTwo}>
        <Outlet/>
      </div>
    </div>
  )
}
