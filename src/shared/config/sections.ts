// Ids de las secciones de la página. La navbar enlaza a `#${SECTION_IDS.about}` y la sección
// usa el mismo valor como `id`: si cambia aquí, cambia en los dos sitios a la vez.
export const SECTION_IDS = {
  hero: 'inicio',
  about: 'sobre-mi',
  projects: 'proyectos',
  skills: 'skills',
  contact: 'contacto',
} as const

/** Cualquiera de los ids de arriba: 'inicio' | 'sobre-mi' | … */
export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]

/** Destino del skip-link: el <main> de la página. */
export const MAIN_CONTENT_ID = 'main-content'
