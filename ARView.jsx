import React from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'

function Box(){
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default function ARView(){
  return (
    <div>
      <h2>AR / 3D View (demo)</h2>
      <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        <div style={{ width: '100%', height: 400 }}>
          <Canvas>
            <ambientLight />
            <pointLight position={[10,10,10]} />
            <Box />
          </Canvas>
        </div>
      </motion.div>
    </div>
  )
}
