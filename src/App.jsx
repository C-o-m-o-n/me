/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {

  const [myProfile, setMyProfile] = useState({})
  useEffect(() => {
    fetch('https://api.github.com/users/C-o-m-o-n')
    .then(res => res.json())
    .then(res => {
      setMyProfile(res) 
      console.log(res)
    }
    )
  }, [])

  return (
    <div>
      <Home myProfile={myProfile}/>
      
    </div>
  )
}

export default App
