"use client"

import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

//this is very bad
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { GroupProps } from '@react-three/fiber'
import * as THREE from 'three';

export default function StarsMobile(props: GroupProps) { 
    const ref = useRef<THREE.Points>(null) 
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 10 }))
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]} {...props}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial 
                    transparent 
                    color="#ffa0e0" 
                    size={.02} 
                    sizeAttenuation={true} 
                    depthWrite={false} 
                />
            </Points>
        </group>
    )
}


