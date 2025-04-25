import React from 'react'

function Heading({ heading, description }) {
  return (
    <div className='relative text-start w-[80%] flex flex-col gap-2'>
      <h1 className="text-2xl font-bold ">{heading}</h1>
      <p className='text-gray-700 font-semibold'>{description}</p>
    </div>
  )
}

export default Heading