import React, { useEffect } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom';
import {getCards} from '../../data/apiCards';

import { Card } from '../Card';

const divClass= ` mx-2 lg:mx-0 grid grid-cols-2 place-content-center
place-items-center sm:grid-cols-3 md:max-w-3xl lg:max-w-7xl lg:grid-cols-4 gap-1 w-full
animate__animated animate__fadeIn`;

export async function loader ({request}){
  
  let url = new URL(request.url);
  
  let cardName= url.searchParams.get('name');
  let cardType=url.searchParams.get('type');
  let cardLevel=url.searchParams.get('level');

  const result=await getCards(cardName,cardType,cardLevel);
  
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

  return (
  <div className={divClass}>
    {
      (cardsResult.length > 0 ) &&

        cardsResult.map( (cardR,i) => (
           <Card key={i} cardR={cardR}/>
        ))
    }
    </div>
  )
}
