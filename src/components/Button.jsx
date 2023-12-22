/* eslint-disable react/prop-types */
import React, {useState} from 'react'



function Button({ button_name, button_icon, onClick}) {
    

  return (
    <button onClick={onClick} className='flex  flex-row justify-center items-center gap-4 bold bg-[#21252d] border-3 border-red-500 w-full p-3 my-3 rounded-2xl '>
        {button_icon}
        
        <p >{button_name}</p>
        </button>
  )
}

export default Button