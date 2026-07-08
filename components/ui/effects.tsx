/* Reusable effect components */

export function GradientBackground({ children, variant = 'safari' }: { children: React.ReactNode; variant?: 'safari' | 'warm' | 'earth' | 'dark' }) {
  const variants = {
    safari: 'bg-gradient-safari',
    warm: 'bg-gradient-warm',
    earth: 'bg-gradient-earth',
    dark: 'bg-gradient-dark-safari',
  }

  return <div className={`${variants[variant]} relative w-full`}>{children}</div>
}

export function AnimatedCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div
      className={`card-hover rounded-lg p-6 bg-card border border-border ${className}`}
      style={{
        animation: `fadeInUp 0.6s ease-out forwards`,
        animationDelay: `${delay * 0.1}s`,
      }}
    >
      {children}
    </div>
  )
}

export function InteractiveImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`image-zoom overflow-hidden rounded-lg ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}

export function SectionHeading({ children, className = '', animated = true }: { children: React.ReactNode; className?: string; animated?: boolean }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold text-foreground text-balance ${className} ${animated ? 'animate-fade-in-up' : ''}`}
    >
      {children}
    </h2>
  )
}

export function OverlayDark({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overlay-dark ${className}`}>
      {children}
    </div>
  )
}

export function GlassCard({ children, className = '', dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={`${dark ? 'glass-dark' : 'glass'} rounded-lg p-6 ${className}`}>
      {children}
    </div>
  )
}

export function TextGradient({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <span className={`text-gradient ${className}`}>{children}</span>
}

export function FloatingElement({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`animate-float ${className}`}>
      {children}
    </div>
  )
}

export function PulseElement({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`animate-pulse-subtle ${className}`}>
      {children}
    </div>
  )
}

export function StaggeredList({ items, renderItem, className = '' }: { items: any[]; renderItem: (item: any, index: number) => React.ReactNode; className?: string }) {
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, index) => (
        <div key={index} style={{ animation: `fadeInUp 0.6s ease-out forwards`, animationDelay: `${index * 0.1}s` }}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  )
}
