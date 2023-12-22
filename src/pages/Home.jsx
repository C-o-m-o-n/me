/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../components/Button'
import { FaRegHeart } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaXTwitter,FaLinkedin,FaDiscord, } from "react-icons/fa6";

function Home({ myProfile}) {
  return (
    <div className='flex items-center flex-row'>

        <div className='max-w-64  py-4 flex  items-center flex-col border-4 border-red'>
        <img src={myProfile.avatar_url} className='rounded-full h-40 w-40' alt="avatar" />
        <h1 className='bold text-xl'>{myProfile.name}</h1>
        <div className='bold flex flex-row justifuy-center items-center'>
            <HiOutlineBuildingOffice2 />
            <p className='bold m-4'>{myProfile.company}</p>
        </div>

        <div className='m-4 flex-row justify-center items-center '>
            <p className='bold '>{myProfile.bio}</p>
            <div>
            <Button button_icon={<IoCallOutline />} button_name="Contact me"/>
            <Button button_icon={<FaRegHeart />} button_name="sponsor me"/>
            </div>

        </div>

        
        <div className='bold flex flex-row  items-center'>
            <CiLocationOn />
            <p className='bold m-4'>{myProfile.location}</p>
        </div>

        <div className='bold flex flex-row  items-center'>
            <FaGithub />
            <p className='bold m-4'>Github</p>
        </div>

        <div className='bold flex flex-row  items-center'>
            <FaXTwitter />
            <p className='bold m-4'>Twitter</p>
        </div>
        <div className='bold flex flex-row  items-center'>
            <FaLinkedin />
            <p className='bold m-4'>LinkeIn</p>
        </div>
        <div className='bold flex flex-row  items-center'>
            <FaDiscord />
            <p className='bold m-4'>Discord</p>
        </div>


        </div>

        <div >
            <h2 className='bold'>Repos</h2>
            <div className='flex justify-center items-center flex-col'>
                <div className='flex justify-center items-center flex-col'>
                    <h3 className='bold'>Repo 1</h3>
                    <p>Repo 1 description</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h3 className='bold'>Repo 2</h3>
                    <p>Repo 2 description</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h3 className='bold'>Repo 3</h3>
                    <p>Repo 3 description</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Home