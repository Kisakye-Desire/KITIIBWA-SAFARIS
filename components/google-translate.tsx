'use client'

import { useEffect, useState } from 'react'

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

const COOKIE_NAME = 'googtrans'

// Read the currently-active translation language from the googtrans cookie
// so the dropdown reflects the real page state after a reload.
function readActiveLanguage(): string {
  if (typeof document === 'undefined') return ''
  const match = document.cookie.split('; ').find((row) => row.startsWith(`${COOKIE_NAME}=`))
  if (!match) return ''
  const value = decodeURIComponent(match.split('=')[1] || '')
  const parts = value.split('/') // format: /en/<lang>
  const lang = parts[2] || ''
  return lang === 'en' ? '' : lang
}

// Google Translate applies translation on page load by reading the googtrans
// cookie. Setting it (for every host variant) and reloading is far more
// reliable than dispatching a change event on the hidden widget's <select>.
function setTranslationCookie(language: string) {
  const value = language ? `/en/${language}` : '/en/en'
  const host = window.location.hostname
  const cookies = [
    `${COOKIE_NAME}=${value};path=/`,
    `${COOKIE_NAME}=${value};path=/;domain=${host}`,
    `${COOKIE_NAME}=${value};path=/;domain=.${host}`,
  ]
  cookies.forEach((cookie) => {
    document.cookie = cookie
  })
}

export default function GoogleTranslate() {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSelected(readActiveLanguage())

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
    setSelected(language)
    setTranslationCookie(language)
    // Reload so Google Translate re-initialises and applies the selected
    // language across the whole page (English clears the translation).
    window.location.reload()
  }

  return (
    <div className="language-switcher flex items-center gap-2 rounded-full border border-border bg-background/80 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm">
      <label htmlFor="site-language" className="whitespace-nowrap">Language</label>
      <select
        id="site-language"
        value={selected}
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
