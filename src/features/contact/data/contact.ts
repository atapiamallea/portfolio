import type { Localized } from '@/shared/i18n'

// Los PDF viven en public/: Vite los sirve tal cual en la raíz del sitio, sin procesarlos.
// Uno por idioma: el enlace descarga el del idioma activo. `Localized` obliga a tener los dos.
// Ojo: los descarga cualquiera, así que mejor versiones sin el teléfono.
export const CV_PATHS: Localized<string> = {
  es: '/cv-andrea-tapia.pdf',
  en: '/cv-andrea-tapia-en.pdf',
}
