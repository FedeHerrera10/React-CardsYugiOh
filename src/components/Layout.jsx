import React from 'react'
import {Outlet } from 'react-router-dom'
import { FormCards } from './FormCards'
import { Header } from './Header'
import useYugioh from './hooks/useYugioh';

/* -- -------------Class Tailwindcss -----------------*/

const divContainer=`flex justify-center items-center
flex-col lg:flex-row lg:justify-center
lg:items-center`;

const divOne = `w-full max-w-md lg:w-1/3 lg:max-w-none
  lg:border-r lg:h-screen
lg:border-r-purple-700  pt-2`;

const divTwo=`w-full mt-4
flex-col lg:px-0  flex justify-center lg:justify-start
 `;

/* ------------------------------------------------- */

export const Layout = () => {
  const{showSearch}=useYugioh();
 return (
    <>
    
    <div className='flex flex-col justify-center content-center w-full text-center text-white '>
      {
       showSearch &&(
        <>
        <Header/>
        <FormCards/>
        </>
       ) 
      }
      
      <div className={divTwo}>
        <Outlet/>
      </div>
    </div>
    </>
  )
}
