'use client'

import { ReactNode } from 'react'

interface AnimatedIconProps {
  children: ReactNode
  className?: string
  animation?: 'spin' | 'bounce' | 'pulse' | 'tilt' | 'scale'
  hoverAnimation?: 'spin' | 'bounce' | 'pulse' | 'rotate' | 'scale'
  delay?: number
}

export default function AnimatedIcon({
  children,
  className = '',
  animation,
  hoverAnimation = 'rotate',
  delay = 0,
}: AnimatedIconProps) {
  const animationClass = animation ? `animate-${animation}` : ''

  return (
    <div
      className={`inline-flex items-center justify-center transition-transform duration-300 hover:${hoverAnimation === 'rotate' ? 'rotate-12' : ''} ${animationClass} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <style>{`
        .hover\:rotate-12:hover {
          transform: rotate(12deg);
        }

        .inline-flex {
          display: inline-flex;
        }
      `}</style>
      {children}
    </div>
  )
}
