'use client'

import { useEffect } from 'react'

export default function GoogleTranslate() {
  useEffect(() => {
    const existing = document.getElementById('google-translate-script')
    if (existing) return

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element',
        )
      }
    }

    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="sr-only">Translate this website</span>
      <span aria-hidden="true">Language</span>
      <div id="google_translate_element" className="min-w-28" />
    </div>
  )
}

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate?: {
        TranslateElement?: new (options: { pageLanguage: string; autoDisplay: boolean }, elementId: string) => unknown
      }
    }
  }
}
