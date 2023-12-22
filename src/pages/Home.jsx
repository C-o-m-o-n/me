/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {useState} from 'react'
import Button from '../components/Button'
import { FaRegHeart } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaXTwitter,FaLinkedin,FaDiscord, } from "react-icons/fa6";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";


function Home({ myProfile}) {
    const [repos, setRepos] = useState([])

    const LoadRepos = () => {
        fetch('https://api.github.com/users/C-o-m-o-n/repos')
        .then(res => res.json())
        .then(res => {
            setRepos(res)
          console.log(res)
        }
        )
      }
  return (
    <div className='flex  flex-row'>

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
            <Button button_icon={<RiGitRepositoryCommitsLine />} onClick={LoadRepos} button_name="Load repos" />
            
            <div className='flex justify-center items-center flex-col'>
                {repos && repos.map((repo) => {
                    return (
                        <div key={repo.id} className='flex justify-center items-center border border-red-500 flex-col'>
                            <h3 className='bold'>{repo?.name}</h3>
                            <p>{repo?.description}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    </div>
    
  )
}

export default Home