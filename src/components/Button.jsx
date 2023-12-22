/* eslint-disable react/prop-types */
import React from 'react'



function Button({ button_name, button_icon}) {
  return (
    <button className='flex  flex-row items-center gap-4 bold bg-[#21252d] border-3 border-red-500 w-full p-3 my-3 rounded-2xl '>
        {button_icon}
        
        {button_name}
        </button>
  )
}

export default Button