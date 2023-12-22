/* eslint-disable react/prop-types */
import React, {useState} from 'react'



function Button({ button_name, button_icon, button_link, onClick}) {
    

  return (
    <button onClick={onClick} className='flex  flex-row justify-center items-center gap-4 bold bg-[#21252d] border-3 border-red-500 w-full p-3 my-3 rounded-2xl '>
        {button_icon}
        
        <p ><a className='hover:text-[blue] hover:underline' href={button_link}>{button_name}</a></p>
        </button>
  )
}

export default Button