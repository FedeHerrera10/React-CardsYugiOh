import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useYugioh from './hooks/useYugioh';

/* -- -------------Class Tailwindcss -----------------*/

const classLink =`p-2 flex justify-center flex-col    shadow-purple-700 text-white
rounded overflow-hidden  cursor-pointer hover:scale-105
transition-transform hover:text-slate-50`;

const classP = ` py-2 text-center uppercase text-sm tracking-wide bg-yellow-700 `;
/* ------------------------------------------------- */

export const Card = ({cardR}) => {
   const {setErrorName,setShowSearch } = useYugioh();
   const [loading, setLoading] = useState(false);

   const imageLoaded = () => {
    setLoading(true);
   }

  const urlImg =  cardR.card_images[0].image_url;

  const handleClick = () => {
    setErrorName(false)
    setShowSearch(false)
  }

  return (


   <Link to="/card/view" state={{ data: cardR }} className=" w-80 sm:w-full  bg-yellow-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" onClick={()=>handleClick()}>
    <img src={urlImg} alt="icon" className='w-full' onLoad={imageLoaded} style={loading ? {} : {display: 'none'}}/>
  </Link>
  
  )
}
