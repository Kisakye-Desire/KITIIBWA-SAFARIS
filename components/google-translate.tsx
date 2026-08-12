'use client'

import { useEffect, useState } from 'react'

const languages = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'es', label: 'Español' },
  { value: 'it', label: 'Italiano' },
  { value: 'pt', label: 'Português' },
  { value: 'sw', label: 'Kiswahili' },
  { value: 'ar', label: 'العربية' },
  { value: 'zh-CN', label: '简体中文' },
]

function readGoogtransCookie(): string {
  if (typeof document === 'undefined') return 'en'
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/)
  if (!match) return 'en'
  // Cookie format is "/en/<target>"
  const parts = decodeURIComponent(match[1]).split('/')
  return parts[2] || 'en'
}

function setGoogtransCookie(target: string) {
  const value = `/en/${target}`
  const host = window.location.hostname
  // Set the cookie for every host/domain variant so Google's script picks it up.
  const variants = [
    `googtrans=${value};path=/`,
    `googtrans=${value};path=/;domain=${host}`,
    `googtrans=${value};path=/;domain=.${host}`,
  ]
  variants.forEach((cookie) => {
    document.cookie = cookie
  })
}

function clearGoogtransCookie() {
  const host = window.location.hostname
  const expired = 'Thu, 01 Jan 1970 00:00:00 UTC'
  const variants = [
    `googtrans=;expires=${expired};path=/`,
    `googtrans=;expires=${expired};path=/;domain=${host}`,
    `googtrans=;expires=${expired};path=/;domain=.${host}`,
  ]
  variants.forEach((cookie) => {
    document.cookie = cookie
  })
}

export default function GoogleTranslate() {
  const [current, setCurrent] = useState('en')

  useEffect(() => {
    setCurrent(readGoogtransCookie())

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
    setCurrent(language)

    // Try the in-page combo first for an instant switch without a reload.
    const googleSelect = document.querySelector<HTMLSelectElement>('.goog-te-combo')
    if (googleSelect) {
      googleSelect.value = language === 'en' ? '' : language
      googleSelect.dispatchEvent(new Event('change'))
    }

    // Persist the choice via Google's cookie and reload so the whole page is
    // translated reliably (the combo alone is inconsistent across browsers).
    if (language === 'en') {
      clearGoogtransCookie()
    } else {
      setGoogtransCookie(language)
    }
    window.location.reload()
  }

  return (
    <div className="language-switcher flex items-center gap-2 rounded-full border border-border bg-background/80 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm">
      <label htmlFor="site-language" className="whitespace-nowrap">Language</label>
      <select
        id="site-language"
        value={current}
        onChange={(event) => changeLanguage(event.target.value)}
        className="max-w-24 cursor-pointer truncate border-0 bg-transparent text-xs font-semibold outline-none"
      >
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
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
