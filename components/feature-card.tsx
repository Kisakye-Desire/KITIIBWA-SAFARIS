'use client'

import { ReactNode, useRef, useEffect } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
  delay?: number
  highlight?: boolean
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = '',
  delay = 0,
  highlight = false,
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`
        group relative rounded-2xl p-8 transition-all duration-300 ease-out
        ${highlight
          ? 'bg-gradient-to-br from-accent/10 to-secondary/5 border-2 border-accent/30 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20'
          : 'bg-card border border-border hover:border-accent/50 hover:shadow-lg'
        }
        hover:-translate-y-2 opacity-0 ${className}
      `}
      style={{
        animation: `slideUp 0.6s ease-out ${delay}ms forwards`,
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
      
      <div className="mb-6 inline-flex items-center justify-center p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
        <div className="text-accent text-2xl">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {highlight && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  )
}
