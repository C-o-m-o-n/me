/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
// import { useRef } from 'react'
import './App.css'
import Profile from './pages/Profile'
import Repos from './pages/Repos'
import Projects from './pages/Projects'
import Awards from './pages/Awards'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {

  const [myProfile, setMyProfile] = useState({})
  useEffect(() => {
    fetch('https://api.github.com/users/C-o-m-o-n')
    .then(res => res.json())
    .then(res => {
      setMyProfile(res) 
    }
    )
  }, [])

  return (
  <>
	  <div className='flex flex-col md:flex-row justify-center md:justify-start '>
      <div className='bg-[#0d1017] h-auto md:h-screen md:sticky top-0 left-0 w-auto'>
      <Profile myProfile={myProfile}/>
      </div>
     <Tabs>
    <TabList>
      <Tab>My Projects</Tab>
      <Tab>my Repos</Tab>
      <Tab>my Awards</Tab>
    </TabList>

    <TabPanel>
      <Projects />
    </TabPanel>
    <TabPanel>
	  <Repos />
    </TabPanel>

	  <TabPanel>
      <Awards/>
    </TabPanel>
    <TabPanel>
	  <Repos />
    </TabPanel>

  </Tabs>
	  </div>
  </>
  )

}

export default App
