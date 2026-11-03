/** Idiomas del portfolio. `as const` hace que el tipo sea `readonly ['es', 'en']` y no `string[]`. */
export const SUPPORTED_LOCALES = ['es', 'en'] as const

/** `'es' | 'en'`: se deriva del array, así añadir un idioma es cambiar una sola línea. */
export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'es'

/** Cada idioma escrito en su propio idioma: no se traduce. */
export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
}

// Vista del array como `string[]` para poder buscar en él cualquier texto.
const supportedLocaleValues: readonly string[] = SUPPORTED_LOCALES

/**
 * Type guard: si devuelve `true`, TypeScript trata `value` como `Locale` a partir de ahí.
 * Sirve para validar datos que vienen de fuera, como localStorage.
 */
export function isSupportedLocale(value: unknown): value is Locale {
  const isText = typeof value === 'string'

  return isText && supportedLocaleValues.includes(value)
}
