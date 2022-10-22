import React from 'react'

const classDiv = `text-center my-4 bg-red-600 text-white font-bold p-3 uppercase`;

export const Error = ({children}) => {
  return (
    <div className={classDiv}>
      {children}
    </div>
  )
}
