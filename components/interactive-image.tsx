'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

interface InteractiveImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  lazy?: boolean
  animated?: boolean
  delay?: number
}

export default function InteractiveImage({
  src,
  alt,
  className = '',
  width = 800,
  height = 600,
  lazy = true,
  animated = true,
  delay = 0,
}: InteractiveImageProps) {
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

  return (
    <div
      ref={ref}
      className={`
        relative overflow-hidden rounded-xl
        ${animated ? 'opacity-0' : 'opacity-100'}
        transition-all duration-500
        group
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
      <div className="overflow-hidden rounded-xl">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          loading={lazy ? 'lazy' : 'eager'}
          quality={85}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    </div>
  )
}
