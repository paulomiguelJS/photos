import React from 'react'

const Button  = ({title, onClick}) => {


  return (
      <button className='text-2xl m-2 bg-gray-700 p-3 rounded' onClick={onClick}>{title}</button>
  )
}

export default Button 