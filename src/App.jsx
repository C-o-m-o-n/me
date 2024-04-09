/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
// import { useRef } from 'react'
import './App.css'
import Profile from './pages/Profile'
import Repos from './pages/Repos'
import Projects from './pages/Projects'

function App() {

  const [myProfile, setMyProfile] = useState({})
  useEffect(() => {
    fetch('https://api.github.com/users/C-o-m-o-n')
    .then(res => res.json())
    .then(res => {
      setMyProfile(res) 
      // console.log(res)
    }
    )
  }, [])

  return (
    <div className='flex flex-col md:flex-row justify-center '>
      <div className='bg-[#0d1017] h-auto md:h-screen md:sticky top-0 left-0 w-auto'>
      <Profile myProfile={myProfile}/>
      </div>
      {/* <Repos /> */}
      <Projects />
      
    </div>
  )
}

export default App
