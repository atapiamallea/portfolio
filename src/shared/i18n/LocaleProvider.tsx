import { useEffect, useState, type ReactNode } from 'react'
import { DICTIONARIES } from './dictionaries'
import { setDocumentLanguage } from './documentLanguage'
import { LocaleContext, type LocaleContextValue } from './LocaleContext'
import { readSavedLocale, saveLocale } from './localeStorage'
import type { Locale } from './locales'

interface LocaleProviderProps {
  children: ReactNode
}

/** Efectos de cambiar de idioma fuera de React: recordarlo y avisar al navegador. */
function syncLocaleOutsideReact(locale: Locale): void {
  saveLocale(locale)
  setDocumentLanguage(locale)
}

/** Guarda el idioma activo y lo comparte con todos los componentes que usan useTranslation. */
export function LocaleProvider({ children }: LocaleProviderProps) {
  // Se pasa la función (sin llamarla): React solo la ejecuta en el primer render.
  const [locale, setLocale] = useState<Locale>(readSavedLocale)

  useEffect(() => syncLocaleOutsideReact(locale), [locale])

  const contextValue: LocaleContextValue = {
    locale,
    dictionary: DICTIONARIES[locale],
    changeLocale: setLocale,
  }

  return <LocaleContext value={contextValue}>{children}</LocaleContext>
}
