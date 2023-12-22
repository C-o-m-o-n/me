/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {useState} from 'react'
import Button from '../components/Button'
import About from '../components/About'
import Repos from '../components/Repos'
import { FaRegHeart } from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
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
            <a href='https://www.uamuzi.org'>
            <p className='hover:text-[blue] hover:underline bold m-4'>{myProfile.company}</p>
            </a>

        </div>
        <div className='bold flex flex-row  items-center'>
            <CiLocationOn size={24}/>
            <p className='bold m-4'>{myProfile.location}</p>
        </div>

        <div className='m-4 flex-row justify-center items-center '>
            <p className='bold '>{myProfile.bio}</p>
            <div>
            <Button button_icon={<IoMailOutline />} button_link='mailto:comon928@gmail.com' button_name="Contact me"/>
            <Button button_icon={<FaRegHeart />} button_link='https://github.com/sponsors/C-o-m-o-n' button_name="sponsor me"/>
            </div>

        </div>

<div className='bold flex md:flex-col  items-center'>

        <div className='bold flex flex-row  items-center'>
            <FaGithub className='m-3'  size={24}/>
            <p className='hidden md:block bold m-4'><a className='hover:text-[blue] hover:underline' href='https://github.com/C-o-m-o-n'>Github</a></p>
        </div>

        <div className='bold flex flex-row  items-center'>
            <FaXTwitter className='m-3' size={24}/>
            <p className='hidden md:block bold m-4'><a className='hover:text-[blue] hover:underline' href='https://x.com/C_o_m_o_n'>Twitter</a></p>
        </div>
        <div className='bold flex flex-row  items-center'>
            <FaLinkedin className='m-3' size={24}/>
            <p className='hidden md:block bold m-4'><a className='hover:text-[blue] hover:underline' href='https://linkedin.com/c-o-m-o-n'>LinkeIn</a></p>
        </div>
        <div className='bold flex flex-row  items-center'>
            <FaDiscord className='m-3' size={24}/>
            <p className='hidden md:block bold m-4'><a className='hover:text-[blue] hover:underline' href='https://discord.gg.com/eqSU46Y7xW'>Discord</a></p>
        </div>
</div>

        </div>


<Repos />

        
    </div>
    
  )
}

export default Home