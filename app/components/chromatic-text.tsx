'use client'

import React, { useEffect, useState } from 'react'

interface ChromaticTextProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  animated?: boolean
  animationSpeed?: number
}

export default function ChromaticText({ 
  children, 
  className = '',
  intensity = 1,
  animated = false,
  animationSpeed = 1
}: ChromaticTextProps) {
  const [time, setTime] = useState(0)

  useEffect(() => {
    if (!animated) return
    
    const interval = setInterval(() => {
      setTime(prev => prev + 0.016 * animationSpeed) // ~60fps
    }, 16)

    return () => clearInterval(interval)
  }, [animated, animationSpeed])

  // Base offsets
  const baseOffsetRed = 2 * intensity
  const baseOffsetBlue = -2 * intensity

  // Animated offsets if animation is enabled
  const animatedOffsetRed = animated 
    ? baseOffsetRed + Math.sin(time * 2) * intensity * 0.5
    : baseOffsetRed
  
  const animatedOffsetBlue = animated 
    ? baseOffsetBlue + Math.cos(time * 1.5) * intensity * 0.5
    : baseOffsetBlue

  // Add vertical chromatic aberration for animation
  const verticalOffsetRed = animated 
    ? Math.sin(time * 1.8 + Math.PI) * intensity * 0.3
    : 0
  
  const verticalOffsetBlue = animated 
    ? Math.cos(time * 2.2) * intensity * 0.3
    : 0

  // Glitch effect
  const glitchIntensity = animated 
    ? (Math.random() > 0.95 ? Math.random() * intensity * 2 : 0)
    : 0

  return (
    <span 
      className={`relative inline-block ${className}`}
      style={{
        textShadow: `
          ${animatedOffsetRed + glitchIntensity}px ${verticalOffsetRed}px 0px rgba(255, 0, 0, 0.4),
          ${animatedOffsetBlue + glitchIntensity * 0.7}px ${verticalOffsetBlue}px 0px rgba(0, 0, 255, 0.4)
        `,
        filter: `contrast(1.1) brightness(1.05) ${animated ? `hue-rotate(${Math.sin(time * 0.5) * 10}deg)` : ''}`,
        transform: animated ? `translateX(${glitchIntensity * 0.5}px)` : 'none',
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </span>
  )
}
