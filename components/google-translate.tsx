'use client'

import { useEffect } from 'react'

const languages = [
  { value: '', label: 'English' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'es', label: 'Español' },
  { value: 'it', label: 'Italiano' },
  { value: 'pt', label: 'Português' },
  { value: 'sw', label: 'Kiswahili' },
  { value: 'ar', label: 'العربية' },
  { value: 'zh-CN', label: '简体中文' },
]

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

  const changeLanguage = (language: string) => {
    const googleSelect = document.querySelector<HTMLSelectElement>('.goog-te-combo')
    if (!googleSelect) return
    googleSelect.value = language
    googleSelect.dispatchEvent(new Event('change'))
  }

  return (
    <div className="language-switcher flex items-center gap-2 rounded-full border border-border bg-background/80 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm">
      <label htmlFor="site-language" className="whitespace-nowrap">Language</label>
      <select
        id="site-language"
        defaultValue=""
        onChange={(event) => changeLanguage(event.target.value)}
        className="max-w-24 cursor-pointer truncate border-0 bg-transparent text-xs font-semibold outline-none"
      >
        {languages.map((language) => (
          <option key={language.value || 'en'} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
      <div id="google_translate_element" className="sr-only" aria-hidden="true" />
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
