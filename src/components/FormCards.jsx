import React, { useState } from 'react'
import { Form, useNavigate, useNavigation } from 'react-router-dom'
import { getBuildUrl } from '../data/apiCards';
import useYugioh from './hooks/useYugioh';

/* -- -------------Class Tailwindcss -----------------*/

const classInputSubmit = ` bg-yellow-700 hover:bg-yellow-600 active:bg-yellow-600 w-full  p-2
rounded-lg text-xl mt-5  block border border-gray-100 text-gray-200 uppercase font-bold transition-colors
cursor-pointer`

const classInput=`
bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg
focus:ring-blue-500 focus:border-purple-700 block w-full  p-2
dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
dark:text-white dark:focus:ring-blue-500
dark:focus:border-purple-700 outline-none`;

const classInputSelect = `mt-5 text-center bg-yell`;

const classError=`mt-4 p-2 text-center text-lg bg-red-600 mx-4 text-white`;

const classForm=`mt-8 mb-8 flex justify-center items-center flex-col w-11/12 lg:10/12 mx-auto
lg:mb-0`;


/* ------------------------------------------------- */



export const FormCards = () => {

    const [cardName,setCardName]=useState('');
    const [cardType,setCardTye]=useState('');
    const [cardLevel,setCardLevel]=useState('');
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
       {errorName && <p className={classError}> Name is required</p>}

      <Form method='get'
        action='/cards'
        className={classForm}
        onSubmit={handlerSubmit}
      >
        <input
          id="card"
          type="text"
          className={classInput}
          placeholder="Card Name"
          name="card"
          onChange={(e)=>setCardName(e.target.value)}
          value={cardName}
        />

        <select
          name='level'
          className={`${classInput} ${classInputSelect}`}
          onChange={(e)=>setCardLevel(e.target.value)}
          value={cardLevel}
         >
          <option value={""}>-- Select Level --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <select name='atribute'
          className={`${classInput} ${classInputSelect}`}
          onChange={(e)=>setCardTye(e.target.value)}
          value={cardType}
        >
          <option value={""}>-- Select Atribute --</option>
          <option value='Spell Card' >Spell Card</option>
          <option value='Trap Card' >Trap Card </option>
          <option value='Normal Monster' >Normal Monster</option>
          <option value='Normal Tuner Monster' >Normal Tuner Monster </option>
          <option value='Effect Monster' >Effect Monster </option>
          <option value='Tuner Monster' >Tuner Monster </option>
          <option value='Flip Monster' >Flip Monster </option>
          <option value='Flip Effect Monster' >Flip Effect Monster </option>
          <option value='Flip Tuner Effect Monster' >Flip Tuner Effect Monster </option>
          <option value='Spirit Monster' >Spirit Monster </option>
          <option value='Union Effect Monster' >Union Effect Monster </option>
          <option value='Gemini Monster' >Gemini Monster </option>
          <option value='Pendulum Effect Monster' >Pendulum Effect Monster </option>
          <option value='Pendulum Normal Monster' >Pendulum Normal Monster </option>
          <option value='Pendulum Tuner Effect Monster' >Pendulum Tuner Effect Monster </option>
          <option value='Ritual Monster' >Ritual Monster </option>
          <option value='Ritual Effect Monster' >Ritual Effect Monster </option>
          <option value='Toon Monster' >Toon Monster </option>
          <option value='Fusion Monster' >Fusion Monster </option>
          <option value='Synchro Monster' >Synchro Monster </option>
          <option value='Synchro Tuner Monster' >Synchro Tuner Monster </option>
          <option value='Synchro Pendulum Effect Monster' >Synchro Pendulum Effect Monster </option>
          <option value='XYZ Monster' >XYZ Monster</option>
          <option value='XYZ Pendulum Effect Monster' >XYZ Pendulum Effect Monster</option>
          <option value='Link Monster' >Link Monster</option>
          <option value='Pendulum Flip Effect Monster' >Pendulum Flip Effect Monster</option>
          <option value='Pendulum Effect Fusion Monster'>Pendulum Effect Fusion Monster</option>
        </select>

        <input type="submit" value="Search"className={classInputSubmit}/>
      </Form>

    </>
  )
}
