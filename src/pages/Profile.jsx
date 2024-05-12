/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {useState} from 'react'
import Button from '../components/Button'
import { FaRegHeart } from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaXTwitter,FaLinkedin,FaDiscord, } from "react-icons/fa6";


function Profile({ myProfile}) {
    
  return (
    <div className='flex  flex-col md:flex-row md:gap-4'>

        <div className='md:min-w-64  py-2 flex  items-center flex-col '>
        <img src={myProfile.avatar_url} className='rounded-full h-40 w-40' alt="avatar" />
        <h1 className='bold text-xl'>{myProfile.name}</h1>
        <div className='bold flex flex-row justifuy-center items-center'>
            <HiOutlineBuildingOffice2 size={24}/>
            <a href='https://www.uamuzi.org'>
            <p className='hover:text-[blue] hover:underline bold m-4'>{myProfile.company}</p>
            </a>

        </div>
        <div className='bold flex flex-row  items-center'>
            <CiLocationOn size={24}/>
            <p className='bold m-4'>{myProfile.location}</p>
        </div>

        <div className='m-2 flex-row justify-center items-center '>
            <p className='bold '>{myProfile.bio}</p>
            <div>
            <Button button_icon={<IoMailOutline />} button_link='mailto:comon928@gmail.com' button_name="Contact me"/>
            <Button button_icon={<FaRegHeart />} button_link='https://github.com/sponsors/C-o-m-o-n' button_name="sponsor me"/>
            </div>

        </div>

<div className='bold flex md:flex-col  items-center'>

        <div className='bold flex flex-row  items-center'>
	  <a className='hover:text-[blue] hover:underline' href='https://github.com/C-o-m-o-n' target='_blank'>
            <FaGithub className='m-3'  size={24}/> </a>
      
	  <p className='hidden md:block bold m-2'><a className='hover:text-[blue] hover:underline' href='https://github.com/C-o-m-o-n' target='_blank'>Github</a></p>
        </div>

        <div className='bold flex flex-row  items-center'><a className='hover:text-[blue] hover:underline' href='https://x.com/C_o_m_o_n' target='_blank' ><FaXTwitter className='m-3' size={24}/></a>
            
            <p className='hidden md:block bold m-2'><a className='hover:text-[blue] hover:underline' href='https://x.com/C_o_m_o_n' target='_blank' >Twitter</a></p>
        </div>
        <div className='bold flex flex-row  items-center'><a className='hover:text-[blue] hover:underline' href='https://linkedin.com/in/c-o-m-o-n' target='_blank' > <FaLinkedin className='m-3' size={24}/></a>
           
            <p className='hidden md:block bold m-2'><a className='hover:text-[blue] hover:underline' href='https://linkedin.com/in/c-o-m-o-n' target='_blank' >LinkeIn</a></p>
        </div>
        <div className='bold flex flex-row  items-center'><a className='hover:text-[blue] hover:underline' href='https://discord.gg.com/eqSU46Y7xW' target='_blank'><FaDiscord className='m-3' size={24}/></a>
            
            <p className='hidden md:block bold m-2'><a className='hover:text-[blue] hover:underline' href='https://discord.gg.com/eqSU46Y7xW' target='_blank'>Discord</a></p>
        </div>
</div>

        </div>
    </div>
    
  )
}

export default Profile
