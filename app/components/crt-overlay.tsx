'use client'

import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Vector2, ShaderMaterial } from 'three'
import { CrtShader } from './crt-shader'

// CRT effect component that renders over the entire screen
function CRTEffect() {
  const materialRef = useRef<ShaderMaterial>(null)
  const { size, viewport } = useThree()

  // Create shader material
  const material = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        ...CrtShader.uniforms,
        iResolution: { value: new Vector2(size.width, size.height) }
      },
      vertexShader: CrtShader.vertexShader,
      fragmentShader: `
        varying vec2 vUv;
        uniform vec2 iResolution;

        // Enhanced CRT effect with more visible scanlines
        void main() {
          vec2 uv = vUv;
          vec2 fragCoord = uv * iResolution;
          
          // Subtle scanlines with reduced intensity
          float scanlines = sin(fragCoord.y * 1.2) * 0.08 + sin(fragCoord.y * 2.5) * 0.04;
          
          // Reduced RGB shift
          vec2 offset = vec2(0.002, 0.0);
          float r = 1.0 - length(uv - 0.5) * 0.1;
          float g = 1.0 - length(uv - 0.5 + offset) * 0.1;
          float b = 1.0 - length(uv - 0.5 - offset) * 0.1;
          
          // Subtle vignette
          float vignette = 1.0 - length(uv - 0.5) * 0.2;
          
          // Gentle phosphor glow effect
          float phosphor = 1.0 + sin(fragCoord.y * 0.5) * 0.05;
          
          // Combine effects
          vec3 color = vec3(r, g, b) * (1.0 + scanlines) * vignette * phosphor;
          
          // Reduced noise
          float noise = fract(sin(dot(fragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 0.02;
          color += noise;
          
          gl_FragColor = vec4(color, 0.12); // Much lower opacity for subtle effect
        }
      `,
      transparent: true,
      depthWrite: false
    })
  }, [size])

  // Update resolution on resize
  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.iResolution.value.set(size.width, size.height)
    }
  })

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <primitive object={material} ref={materialRef} />
    </mesh>
  )
}

interface CRTOverlayProps {
  enabled?: boolean
  className?: string
  children?: React.ReactNode
}

export default function CRTOverlay({ enabled = true, className = '', children }: CRTOverlayProps) {
  if (!enabled) {
    return <>{children}</>
  }

  return (
    <div className={`relative ${className}`}>
      {/* Content */}
      {children}
      
      {/* CRT Filter Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 w-full h-full"
        style={{ mixBlendMode: 'multiply' }}
      >
        <Canvas
          orthographic
          camera={{ 
            zoom: 1,
            near: 0.1,
            far: 1000,
            position: [0, 0, 1]
          }}
          gl={{ 
            antialias: false,
            alpha: true
          }}
          style={{ 
            width: '100%', 
            height: '100%', 
            pointerEvents: 'none' 
          }}
        >
          <CRTEffect />
        </Canvas>
      </div>
    </div>
  )
}
