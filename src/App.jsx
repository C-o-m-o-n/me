/* eslint-disable react/no-unknown-property */
// import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
// import { useRef } from 'react'
import './App.css'
import Cube from './components/Cube'
// import { BoxGeometry } from 'three'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Canvas>
      <directionalLight position={[0, 0, 5]} intensity={0.5}/>
      <ambientLight intensity={0.1} />
{/* <group position={[0, -1, 0]}>
      <Cube  position={[1, 0, 0]} size={[1, 1, 1]}  color="green" />
      <Cube  position={[-1, 2, 0]} size={[1, 1, 1]}  color="blue" />
      <Cube  position={[1, 2, 0]} size={[1, 1, 1]}  color="red" />
      <Cube  position={[-1, 0, 0]} size={[1, 1, 1]}  color="yellow" />
</group> */}
      <Cube  position={[0, 0, 0]} size={[1, 1, 1]}  color="yellow" />
    </Canvas>
  )
}

export default App
