'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Vector2 } from 'three'
import RefractionMaterial from './refraction-material'

// Extend to use the custom material
extend({ RefractionMaterial })

interface RefractiveTextProps {
  children: string
  fontSize?: number
  position?: [number, number, number]
  color?: string
  className?: string
}

function RefractiveText({ children, fontSize = 1, position = [0, 0, 0], color = "white" }: RefractiveTextProps) {
  const textRef = useRef()
  const { size } = useThree()
  
  const material = useMemo(() => {
    return new RefractionMaterial({
      resolution: new Vector2(size.width, size.height)
    })
  }, [size])

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={fontSize}
      color={color}
      anchorX="center"
      anchorY="middle"
      material={material}
    >
      {children}
    </Text>
  )
}

interface RefractiveTextWrapperProps {
  children: string
  className?: string
  fontSize?: number
}

export default function RefractiveTextWrapper({ 
  children, 
  className = '',
  fontSize = 0.5
}: RefractiveTextWrapperProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Original text (hidden) */}
      <span className="invisible">{children}</span>
      
      {/* 3D refractive text overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RefractiveText fontSize={fontSize}>
            {children}
          </RefractiveText>
        </Canvas>
      </div>
    </div>
  )
}
