"use client";

import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { GroupProps } from '@react-three/fiber';
import * as THREE from 'three';

export default function Stars(props: GroupProps) { 
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 10 }));
    const mouse = useRef({ x: 0, y: 0 });
    const randomMovement = useRef({ x: Math.random() * 0.005, y: Math.random() * 0.005 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const handleTouchMove = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                mouse.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
                mouse.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Apply random movement
            ref.current.rotation.x += randomMovement.current.y * delta * 5;
            ref.current.rotation.y -= randomMovement.current.x * delta * 5;

            // Map the mouse position to the rotation with user control
            ref.current.rotation.x += (mouse.current.y * Math.PI * 0.15) * delta;
            ref.current.rotation.y += (mouse.current.x * Math.PI * 0.15) * delta;
        }
    });

    return (
        <group {...props}>
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