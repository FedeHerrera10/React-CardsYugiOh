import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useYugioh from './hooks/useYugioh';

/* -- -------------Class Tailwindcss -----------------*/

const classLink =`mt-5  sm:mt-8 ml-1 border border-yellow-700   shadow-purple-700 text-white
rounded overflow-hidden shadow-lg bg-yellow-700 cursor-pointer hover:scale-105
transition-transform hover:text-slate-50 w-10/12`;

const classP = ` my-2 text-center uppercase text-sm tracking-wide`;
/* ------------------------------------------------- */

export const Card = ({cardR}) => {
   const {setErrorName } = useYugioh();
   const [loading, setLoading] = useState(false);

   const imageLoaded = () => {
    setLoading(true);
   }

  const urlImg =  cardR.card_images[0].image_url;

  return (

  <Link to="/card/view" state={{ data: cardR }} className={classLink} onClick={()=>{setErrorName(false)}}>
    <img src={urlImg} alt="icon" className='w-full' onLoad={imageLoaded} style={loading ? {} : {display: 'none'}}/>
    <p className={classP}>{cardR.name}</p>
  </Link>
  )
}
