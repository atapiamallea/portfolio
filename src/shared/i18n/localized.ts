import type { Locale } from './locales'

/**
 * Un valor escrito en todos los idiomas: `Localized<string>` es `{ es: string; en: string }`.
 * Es genérico (`<T>`), como `List<T>` en Java: sirve para textos, listas o cualquier otro tipo.
 */
export type Localized<T> = Record<Locale, T>

/** Devuelve la versión del idioma indicado, p. ej. la descripción de un proyecto. */
export function pickLocalized<T>(value: Localized<T>, locale: Locale): T {
  return value[locale]
}
