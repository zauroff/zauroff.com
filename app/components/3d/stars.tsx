"use client";

import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// Importing random generation
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { GroupProps } from '@react-three/fiber';
import * as THREE from 'three';

export default function Stars(props: GroupProps) { 
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 10 }));
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Apply some movement to the rotation based on the mouse position
            ref.current.rotation.x = mouse.current.y * 0.2;
            ref.current.rotation.y = mouse.current.x * 0.2;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]} {...props}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial 
                    transparent 
                    color="#ffa0e0" 
                    size={0.02} 
                    sizeAttenuation={true} 
                    depthWrite={false} 
                />
            </Points>
        </group>
    );
}
