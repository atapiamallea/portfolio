import type { Locale } from './locales'

/** Actualiza `<html lang>` para que los lectores de pantalla pronuncien en el idioma correcto (WCAG 3.1.1). */
export function setDocumentLanguage(locale: Locale): void {
  document.documentElement.lang = locale
}
