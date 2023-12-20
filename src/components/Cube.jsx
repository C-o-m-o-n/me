/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function Cube( {position, size , color} ) {
    const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.X += delta
    // console.log(delta)
  })

  return (
    <mesh position={position} ref={ref}>
        <boxGeometry args={size}/>
        <meshStandardMaterial color={color}/>
      </mesh>
  )
}

export default Cube