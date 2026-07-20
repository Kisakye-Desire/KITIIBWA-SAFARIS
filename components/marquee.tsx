'use client'

import { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  className?: string
  speed?: 'slow' | 'normal' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
}

export default function Marquee({
  children,
  className = '',
  speed = 'normal',
  direction = 'left',
  pauseOnHover = true,
}: MarqueeProps) {
  const speedMap = {
    slow: 60,
    normal: 40,
    fast: 20,
  }

  const duration = speedMap[speed]
  const directionClass = direction === 'right' ? 'reverse' : ''
  const hoverClass = pauseOnHover ? 'hover:pause' : ''

  return (
    <div
      className={`marquee-container ${className}`}
      style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
    >
      <style>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
        }

        .marquee-wrapper {
          display: flex;
          width: fit-content;
          animation: marquee var(--marquee-duration, 40s) linear infinite;
        }

        .marquee-wrapper.reverse {
          animation: marqueeReverse var(--marquee-duration, 40s) linear infinite;
        }

        .marquee-container.hover\:pause:hover .marquee-wrapper {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeReverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
      <div className={`marquee-wrapper ${directionClass} ${hoverClass}`}>
        {children}
        {children}
      </div>
    </div>
  )
}
