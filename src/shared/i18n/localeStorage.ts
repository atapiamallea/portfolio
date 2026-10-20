import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from './locales'

const LOCALE_STORAGE_KEY = 'portfolio-locale'

// localStorage puede lanzar un error (modo privado, almacenamiento bloqueado…);
// en ese caso se trata como si no hubiera nada guardado.
function readStorageValue(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

/** Idioma elegido en una visita anterior o, si no hay uno válido, el idioma por defecto. */
export function readSavedLocale(): Locale {
  const savedValue = readStorageValue(LOCALE_STORAGE_KEY)

  return isSupportedLocale(savedValue) ? savedValue : DEFAULT_LOCALE
}

export function saveLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // Sin almacenamiento la web funciona igual; solo no recordará el idioma.
  }
}
