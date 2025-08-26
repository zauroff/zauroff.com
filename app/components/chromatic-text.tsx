'use client'

import React from 'react'

interface ChromaticTextProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function ChromaticText({ 
  children, 
  className = '',
  intensity = 1
}: ChromaticTextProps) {
  const offsetRed = 2 * intensity
  const offsetBlue = -2 * intensity
  
  return (
    <span 
      className={`relative inline-block ${className}`}
      style={{
        textShadow: `
          ${offsetRed}px 0px 0px rgba(255, 0, 0, 0.3),
          ${offsetBlue}px 0px 0px rgba(0, 0, 255, 0.3),
          0px 0px 10px rgba(255, 255, 255, 0.1)
        `,
        filter: 'contrast(1.1) brightness(1.05)'
      }}
    >
      {children}
    </span>
  )
}
