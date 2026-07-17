'use client'

import { useEffect, useRef } from 'react'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  stagger?: boolean
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  stagger = false,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-text-in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const words = children.split(' ')

  if (stagger) {
    return (
      <div
        ref={ref}
        className={`flex flex-wrap gap-1 ${className}`}
        style={{ '--text-delay': `${delay}ms` } as React.CSSProperties}
      >
        <style>{`
          .text-reveal-word {
            opacity: 0;
            animation: none;
            display: inline-block;
          }

          .text-reveal-word.animate-in {
            animation: wordReveal 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          @keyframes wordReveal {
            to {
              opacity: 1;
            }
          }
        `}</style>
        {words.map((word, i) => (
          <span
            key={i}
            className="text-reveal-word"
            style={{
              animation: `wordReveal 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay + i * 50}ms forwards`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`text-reveal ${className}`}
      style={
        {
          '--text-delay': `${delay}ms`,
        } as React.CSSProperties
      }
    >
      <style>{`
        .text-reveal {
          opacity: 0;
          animation: none;
        }

        .text-reveal.animate-text-in {
          animation: textReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) var(--text-delay, 0ms) forwards;
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(10px);
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
