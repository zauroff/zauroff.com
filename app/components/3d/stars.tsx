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
    const isUserInteracting = useRef(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
            isUserInteracting.current = true; // Mark as user interacting
        };

        const handleTouchMove = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                mouse.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
                mouse.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;
                isUserInteracting.current = true; // Mark as user interacting
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
            // Apply user interaction rotation with higher priority
            if (isUserInteracting.current) {
                ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.current.y * Math.PI * 0.1, delta * 2);
                ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.current.x * Math.PI * 0.1, delta * 2);
                // Gradually reset isUserInteracting to false if no input
                if (Math.abs(mouse.current.x) < 0.01 && Math.abs(mouse.current.y) < 0.01) {
                    isUserInteracting.current = false;
                }
            } else {
                // Apply random movement when no user interaction
                ref.current.rotation.x += randomMovement.current.y * delta * 10;
                ref.current.rotation.y -= randomMovement.current.x * delta * 10;
            }
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
