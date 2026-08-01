'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const directionMap = {
    up: 'from-bottom',
    down: 'from-top',
    left: 'from-right',
    right: 'from-left',
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${directionMap[direction]} ${className}`}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          '--reveal-duration': `${duration}s`,
        } as React.CSSProperties
      }
    >
      <style>{`
        .scroll-reveal {
          opacity: 0;
          animation: none;
        }

        .scroll-reveal.from-bottom {
          transform: translateY(40px);
        }

        .scroll-reveal.from-top {
          transform: translateY(-40px);
        }

        .scroll-reveal.from-left {
          transform: translateX(40px);
        }

        .scroll-reveal.from-right {
          transform: translateX(-40px);
        }

        .scroll-reveal.animate-in {
          animation: scrollReveal var(--reveal-duration, 0.6s) cubic-bezier(0.4, 0, 0.2, 1) var(--reveal-delay, 0ms) forwards;
        }

        @keyframes scrollReveal {
          to {
            opacity: 1;
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
      {children}
    </div>
  )
}
