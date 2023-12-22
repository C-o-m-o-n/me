/* eslint-disable react/prop-types */
import React from 'react'

function Home({ myProfile}) {
  return (
    <div >
      <p className='text-red-500 underline'>  Home page </p>
        <img src={myProfile.avatar_url} className='rounded-full h-35 w-35' alt="avatar" />
        <h2>Name {myProfile.name}</h2>
    </div>
    
  )
}

export default Home