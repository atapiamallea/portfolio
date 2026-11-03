import { createContext } from 'react'
import type { Dictionary } from './dictionaries'
import type { Locale } from './locales'

export interface LocaleContextValue {
  locale: Locale
  /** Textos del idioma activo. */
  dictionary: Dictionary
  changeLocale: (locale: Locale) => void
}

// `null` = "no hay LocaleProvider por encima". useTranslation lo convierte en un error claro.
export const LocaleContext = createContext<LocaleContextValue | null>(null)
