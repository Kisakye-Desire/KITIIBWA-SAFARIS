'use client'

import Image from 'next/image'

interface GalleryImageProps {
  src: string
  alt: string
  title: string
  description?: string
}

export default function GalleryImage({ src, alt, title, description }: GalleryImageProps) {
  return (
    <div className="gallery-item">
      <Image
        src={src}
        alt={alt}
        fill
        className="gallery-image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="image-overlay flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        {description && <p className="text-white/90 text-sm">{description}</p>}
      </div>
    </div>
  )
}
