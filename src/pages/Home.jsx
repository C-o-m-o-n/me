/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {useState} from 'react'
import Button from '../components/Button'
import About from '../components/About'
import Repos from '../components/Repos'
import { FaRegHeart } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaXTwitter,FaLinkedin,FaDiscord, } from "react-icons/fa6";
// import { RiGitRepositoryCommitsLine } from "react-icons/ri";


function Home({ myProfile}) {
    
  return (
    <div className='flex  flex-col md:flex-row md:gap-4'>

        <div className='md:min-w-64  py-4 flex  items-center flex-col '>
        <img src={myProfile.avatar_url} className='rounded-full h-40 w-40' alt="avatar" />
        <h1 className='bold text-xl'>{myProfile.name}</h1>
        <div className='bold flex flex-row justifuy-center items-center'>
            <HiOutlineBuildingOffice2 size={24}/>
            <p className='bold m-4'>{myProfile.company}</p>
        </div>
        <div className='bold flex flex-row  items-center'>
            <CiLocationOn size={24}/>
            <p className='bold m-4'>{myProfile.location}</p>
        </div>

        <div className='m-4 flex-row justify-center items-center '>
            <p className='bold '>{myProfile.bio}</p>
            <div>
            <Button button_icon={<IoCallOutline />} button_name="Contact me"/>
            <Button button_icon={<FaRegHeart />} button_name="sponsor me"/>
            </div>

        </div>

<div className='bold flex md:flex-col  items-center'>

        <div className='bold flex flex-row  items-center'>
            <FaGithub className='m-3'  size={24}/>
            <p className='hidden md:block bold m-4'>Github</p>
        </div>

        <div className='bold flex flex-row  items-center'>
            <FaXTwitter className='m-3' size={24}/>
            <p className='hidden md:block bold m-4'>Twitter</p>
        </div>
        <div className='bold flex flex-row  items-center'>
            <FaLinkedin className='m-3' size={24}/>
            <p className='hidden md:block bold m-4'>LinkeIn</p>
        </div>
        <div className='bold flex flex-row  items-center'>
            <FaDiscord className='m-3' size={24}/>
            <p className='hidden md:block bold m-4'>Discord</p>
        </div>
</div>

        </div>


<Repos />

        
    </div>
    
  )
}

export default Home