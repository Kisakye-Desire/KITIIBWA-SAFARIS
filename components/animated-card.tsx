'use client'

import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: 'scale' | 'lift' | 'glow' | 'rotate'
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  hover = 'lift',
}: AnimatedCardProps) {
  const hoverClasses = {
    scale: 'hover:scale-105',
    lift: 'hover:-translate-y-2',
    glow: 'hover:shadow-2xl hover:shadow-accent/50',
    rotate: 'hover:rotate-1',
  }

  return (
    <div
      className={`transition-all duration-500 ease-out ${hoverClasses[hover]} ${className}`}
      style={{
        animation: `slideUp 0.6s ease-out ${delay}ms forwards`,
        opacity: 0,
      }}
    >
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {children}
    </div>
  )
}
