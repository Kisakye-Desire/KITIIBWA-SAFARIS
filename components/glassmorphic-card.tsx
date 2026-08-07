'use client'

import { ReactNode, useRef, useEffect } from 'react'

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  hover?: 'lift' | 'glow' | 'scale'
  delay?: number
  animated?: boolean
}

export default function GlassmorphicCard({
  children,
  className = '',
  hover = 'lift',
  delay = 0,
  animated = true,
}: GlassmorphicCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animated || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [animated])

  const hoverClasses = {
    lift: 'hover:-translate-y-2 hover:shadow-2xl',
    glow: 'hover:shadow-2xl hover:shadow-accent/50',
    scale: 'hover:scale-105',
  }

  return (
    <div
      ref={ref}
      className={`
        glass rounded-2xl p-6 border border-white/20 backdrop-blur-md
        transition-all duration-500 ease-out
        ${hoverClasses[hover]}
        ${animated ? 'opacity-0' : 'opacity-100'}
        ${className}
      `}
      style={{
        animation: animated ? `slideUp 0.6s ease-out ${delay}ms forwards` : 'none',
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
