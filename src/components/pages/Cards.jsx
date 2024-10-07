import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom';
import {getCards} from '../../data/apiCards';

import { Card } from '../Card';

import { dataY } from '../../data/data';

export async function loader ({request}){
  
  let url = new URL(request.url);
  
  let cardName= url.searchParams.get('name');
  let cardType=url.searchParams.get('type');
  let cardLevel=url.searchParams.get('level');

  const result=await getCards(cardName,cardType,cardLevel);
  //const result = dataY;
  if(result.error){
     throw new Response('',{
      status:404,
      statusText:'Cards Not Founds'
    })
  }
  
  return result;
}

export const Cards = () => {
  
  const cardsResult = useLoaderData();
  const [PageResult,setPageResult]= useState(10);
  const [sizeResult,setSizeResult]= useState(0);
  const [showMore,setShowMore] = useState(false);

  useEffect(() => {
    setSizeResult(cardsResult.length);
    if(cardsResult.length > 10){
      setShowMore(true);
    }
  }, [cardsResult])
  

  const handleClick = ()=>{
    let res=0;
    if(PageResult + 10 > sizeResult){
       let res = sizeResult-PageResult;
       setPageResult(PageResult+res);
       setShowMore(false);
       return;
    }
    res=PageResult + 10;
    setPageResult(res);

  }

  




  return (
  
    <>

<div class="w-full mx-auto grid grid-cols-1 justify-items-center justify-center gap-y-20  
mt-10 mb-5
px-10 sm:gap-6  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5  
 xl:grid-col-5 xl:max-w-7xl xl:mx-auto animate__animated animate__fadeIn ">
      {
       (cardsResult.length > 0 ) &&
         cardsResult.slice(0,PageResult).map( (cardR,i) => (
            <Card key={i} cardR={cardR}/>
         ))
         
     }
   

     </div>

{showMore &&  <button className="bg-violet-600 mx-auto self-center
  my-3 text-white font-bold uppercase p-3   lg:w-52
 hover:bg-violet-500 transition-colors rounded-lg" onClick={()=>handleClick()}>More</button>}
</>
  )
}
