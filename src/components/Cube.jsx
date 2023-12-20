/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'

function Cube( {position, size , color} ) {
  return (
    <mesh position={position}>
        <boxGeometry args={size}/>
        <meshStandardMaterial color={color}/>
      </mesh>
  )
}

export default Cube