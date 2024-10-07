import React, { useState } from 'react'
import { Form, useNavigate, useNavigation } from 'react-router-dom'
import { getBuildUrl } from '../data/apiCards';
import useYugioh from './hooks/useYugioh';

/* -- -------------Class Tailwindcss -----------------*/



const classInputSelect = `bg-transparent placeholder:text-slate-200 text-slate-200 text-md border-2 border-violet-800 rounded-md 
      text-center py-2 transition duration-300 ease focus:outline-none focus:border-violet-500 hover:border-violet-500 shadow-sm focus:shadow
      [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-violet-900
            [&::-webkit-scrollbar-thumb]:bg-violet-300
       `;

const classError=`mt-4 p-1 lg:p-2 lg:text-md text-center text-sm bg-red-600 mx-4 text-white`;

const classForm=`mt-8 mb-8 flex justify-center items-center flex-col w-11/12 lg:10/12 mx-auto
lg:mb-0`;


/* ------------------------------------------------- */



export const FormCards = () => {

    const [cardName,setCardName]=useState('');
    
    const [cardType,setCardTye]=useState('');
    const [cardLevel,setCardLevel]=useState('');
    const [advancedSearch,setadvancedSearch]=useState(false);
    const {errorName,setErrorName } = useYugioh();
    const navigate=useNavigate();

    const handlerSubmit = (e)=>{
    e.preventDefault();

    if(cardName === ''){
      setErrorName(true);
      return;
    }

    setErrorName(false);
    const url = getBuildUrl(cardName,cardLevel,cardType);
    setCardLevel('');
    setCardName('');
    setCardTye('');
    
    return navigate(url);
  }

 
  
  return (
      <>
       

      <Form method='get'
        action='/cards'
        className={classForm}
        onSubmit={handlerSubmit}
      >
        <div className="w-full text-md lg:text-lg ">
  <div className="relative w-full max-w-2xl sm:w-2/3 mx-auto">
    <input
      name='cardName'
      className="w-full bg-transparent placeholder:text-slate-200 text-slate-200 text-md border-2 border-violet-800 rounded-md 
      pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-violet-500 hover:border-violet-500 shadow-sm focus:shadow"
      placeholder="Insert your favorite card.." 
      value={cardName}
      onChange={(e)=>setCardName(e.target.value)}
    />
    <button
      className="absolute top-2 right-2 flex items-center rounded bg-violet-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-violet-700 focus:shadow-none active:bg-violet-700 hover:bg-violet-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={handlerSubmit}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
      </svg>
 
      Search
    </button> 
    {errorName && <p className={classError}> Name is required</p>}
    
    {
      advancedSearch && (
        <div className='flex w-full mt-3'>
        <select
          name='level'
          className={` ${classInputSelect} w-2/5 mx-1`}
          onChange={(e)=>setCardLevel(e.target.value)}
          value={cardLevel}
         >
          <option value={""} className='bg-purple-900'>-- Select Level --</option>
          <option className="bg-purple-900 " value="1">Level 1</option>
          <option className="bg-purple-900 " value="2">Level 2</option>
          <option className="bg-purple-900 " value="3">Level 3</option>
          <option className="bg-purple-900 " value="4">Level 4</option>
          <option className="bg-purple-900 " value="5">Level 5</option>
          <option className="bg-purple-900 " value="6">Level 6</option>
          <option className="bg-purple-900 " value="7">Level 7</option>
          <option className="bg-purple-900 " value="8">Level 8</option>
          <option className="bg-purple-900 " value="9">Level 9</option>
          <option className="bg-purple-900 " value="10">Level 10</option>
        </select>

        <select name='atribute'
          className={`${classInputSelect} w-2/3`}
          onChange={(e)=>setCardTye(e.target.value)}
          value={cardType}
        >
          <option className="bg-purple-900"value={""}>-- Select Atribute --</option>
          <option className="bg-purple-900"value='Spell Card' >Spell Card</option>
          <option className="bg-purple-900"value='Trap Card' >Trap Card </option>
          <option className="bg-purple-900"value='Normal Monster' >Normal Monster</option>
          <option className="bg-purple-900"value='Normal Tuner Monster' >Normal Tuner Monster </option>
          <option className="bg-purple-900"value='Effect Monster' >Effect Monster </option>
          <option className="bg-purple-900"value='Tuner Monster' >Tuner Monster </option>
          <option className="bg-purple-900"value='Flip Monster' >Flip Monster </option>
          <option className="bg-purple-900"value='Flip Effect Monster' >Flip Effect Monster </option>
          <option className="bg-purple-900"value='Flip Tuner Effect Monster' >Flip Tuner Effect Monster </option>
          <option className="bg-purple-900"value='Spirit Monster' >Spirit Monster </option>
          <option className="bg-purple-900"value='Union Effect Monster' >Union Effect Monster </option>
          <option className="bg-purple-900"value='Gemini Monster' >Gemini Monster </option>
          <option className="bg-purple-900"value='Pendulum Effect Monster' >Pendulum Effect Monster </option>
          <option className="bg-purple-900"value='Pendulum Normal Monster' >Pendulum Normal Monster </option>
          <option className="bg-purple-900"value='Pendulum Tuner Effect Monster' >Pendulum Tuner Effect Monster </option>
          <option className="bg-purple-900"value='Ritual Monster' >Ritual Monster </option>
          <option className="bg-purple-900"value='Ritual Effect Monster' >Ritual Effect Monster </option>
          <option className="bg-purple-900"value='Toon Monster' >Toon Monster </option>
          <option className="bg-purple-900"value='Fusion Monster' >Fusion Monster </option>
          <option className="bg-purple-900"value='Synchro Monster' >Synchro Monster </option>
          <option className="bg-purple-900"value='Synchro Tuner Monster' >Synchro Tuner Monster </option>
          <option className="bg-purple-900"value='Synchro Pendulum Effect Monster' >Synchro Pendulum Effect Monster </option>
          <option className="bg-purple-900"value='XYZ Monster' >XYZ Monster</option>
          <option className="bg-purple-900"value='XYZ Pendulum Effect Monster' >XYZ Pendulum Effect Monster</option>
          <option className="bg-purple-900"value='Link Monster' >Link Monster</option>
          <option className="bg-purple-900"value='Pendulum Flip Effect Monster' >Pendulum Flip Effect Monster</option>
          <option className="bg-purple-900"value='Pendulum Effect Fusion Monster'>Pendulum Effect Fusion Monster</option>
        </select>
        </div>
      )
    }

<p className='text-left mt-2 text-md underline cursor-pointer text-slate-200 hover:text-slate-300 inline-block ' onClick={()=>setadvancedSearch(!advancedSearch)}>Advanced Search</p>
  </div>
  
</div>
        

        
      </Form>
      

    </>
  )
}
