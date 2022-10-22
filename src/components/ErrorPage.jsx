import {useRouteError} from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='space-y-8'>
       <h1 className='text-center text-6xl font-extrabold mt-20 text-white'>
          Upps!
        </h1>
        <p className="text-center text-lg text-white">
            {error.statusText || error.message}
        </p>
    </div>

  )
}
