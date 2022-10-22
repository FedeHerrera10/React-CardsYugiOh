import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import IconLevel from '../../assets/icon_level.png';
import { IconAtribute } from '../../IconAtribute';

/* -- -------------Class Tailwindcss -----------------*/
const divClassOne= `flex flex-col text-white
  max-w-xs sm:mt-8 w-4/5 mx-auto mt-12 md:flex-row
rounded-lg  md:w-full md:max-w-none
md:items-center md:justify-center lg:max-w-6xl
animate__animated animate__fadeIn`;

const classDivTwo = `w-full md:w-1/2  md:max-w-md p-2 lg:max-w-full lg:w-3/4
border-4 border-yellow-700 border-double mt-5 md:mt-0 mr-8`;

const classButtomBack =`bg-yellow-600
  my-3 text-white font-bold uppercase p-3  mx-4 self-start lg:w-20
 hover:bg-yellow-700 transition-colors rounded-lg` ;

const classImg = `w-full  p-2 md:w-3/4 h-96 rounded-lg mx-auto`;

const classLink = `text-white text-2xl text-center bg-yellow-700 my-auto p-2 mx-auto rounded-lg`;

/* ------------------------------------------------- */



export const CardView = () => {

  const location = useLocation();
  const data = location.state?.data;
  const navigate = useNavigate();
  const urlImg=data.card_images[0].image_url;
  return (
  <>
    {
      (data) ?
      <>
        <button
            className={classButtomBack}
            onClick={()=>navigate(-1)}
        >
          Back
        </button>

        <div className={divClassOne}>
          <div className='md:w-1/2 lg:w-3/4'>
              <img src={urlImg} alt="card" className={classImg}/>
          </div>

          <div className={classDivTwo}>

              <p className='text-center text-bold text-lg'>{data.name}</p>
              <p className='mt-2'>Type: {data.type}</p>
              <p className='mt-2 flex items-center'>Atribute:<IconAtribute type={data.attribute}/>{data.attribute}</p>
              <p className='mt-2 flex items-center'>Level: <img src={IconLevel} className='w-5 h-5 mx-2'/> {data.level}</p>
              <p className='mt-2'>Archetype: {data.archetype}</p>
              <p className='mt-2'>Race: {data.race}</p>
              <p className='mt-2'>Description Card: {data.desc}</p>

              <div className='flex w-full border-box justify-center gap-4 mt-6'>
                <p className='p-5  bg-yellow-700'>ATK/{data.atk}</p>
                <p className='p-5 bg- bg-yellow-700'>DEF/{data.def}</p>
              </div>
            </div>
        </div>
      </>
      :
      <Link to='/' className={classLink} >Go to home</Link>
    }

</>
  )
}
