'use client'

interface SocialIconsProps {
  facebook?: string
  linkedin?: string
  instagram?: string
  twitter?: string
  email?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function SocialIcons({
  facebook,
  linkedin,
  instagram,
  twitter,
  email,
  size = 'md',
  className = '',
}: SocialIconsProps) {
  const gapClass = size === 'sm' ? 'gap-2' : 'gap-3'
  const textSize = size === 'sm' ? 'text-sm' : 'text-base'

  return (
    <div className={`flex ${gapClass} ${className}`}>
      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted-foreground hover:text-primary transition-colors font-bold ${textSize}`}
          aria-label="Facebook"
        >
          f
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted-foreground hover:text-primary transition-colors font-bold ${textSize}`}
          aria-label="LinkedIn"
        >
          in
        </a>
      )}
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted-foreground hover:text-primary transition-colors ${textSize}`}
          aria-label="Instagram"
        >
          📷
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted-foreground hover:text-primary transition-colors font-bold ${textSize}`}
          aria-label="Twitter"
        >
          𝕏
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className={`text-muted-foreground hover:text-primary transition-colors ${textSize}`}
          aria-label="Email"
        >
          ✉️
        </a>
      )}
    </div>
  )
}
