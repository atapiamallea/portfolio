// Fuente de verdad de los textos: el tipo `Dictionary` se deduce de este objeto.
// Los títulos con una palabra resaltada son objetos `title: { start, highlight, end }`
// que pinta el componente HighlightedText, así el JSX no contiene texto.
export const es = {
  meta: {
    title: 'X — Full Stack Developer',
    description:
      'Portfolio de X, desarrolladora Full Stack: proyectos con React, Node.js, Express, MongoDB y SQL.',
  },
  localeSwitcher: {
    groupLabel: 'Idioma',
  },
  hero: {
    availability: 'Disponible para trabajar',
    title: { start: 'Hola, soy ', highlight: 'X', end: '' },
    subtitle:
      'Desarrolladora Full Stack recién graduada. Construyo interfaces con personalidad y APIs que funcionan.',
    primaryAction: 'Ver proyectos ↓',
    secondaryAction: 'Hablemos',
  },
  about: {
    label: '01 — Sobre mí',
    title: { start: 'De cero a ', highlight: 'full stack', end: ' en un bootcamp.' },
    paragraphs: [
      'Me gradué hace poco de un bootcamp intensivo de desarrollo full stack. Trabajé en equipo en proyectos grupales con metodologías ágiles y llevé un proyecto individual de principio a fin: diseño, frontend, backend y despliegue.',
      'Me gusta que lo que construyo se vea bien y funcione bien.',
    ],
    stats: {
      projects: 'proyectos',
      team: 'en equipo',
      solo: 'individual',
    },
  },
  projects: {
    label: '02 — Proyectos',
    title: { start: 'Trabajos ', highlight: 'seleccionados', end: '' },
    teamTag: 'Grupal',
    soloTag: 'Individual',
    technologiesLabel: 'Tecnologías usadas',
    demoLink: 'Demo ↗',
    codeLink: 'Código ↗',
  },
  skills: {
    label: '03 — Skills',
    title: { start: 'Lo que ', highlight: 'sé hacer', end: '' },
  },
  contact: {
    label: '04 — Contacto',
    title: { start: '¿Trabajamos ', highlight: 'juntos', end: '?' },
  },
}

/** La forma que deben cumplir todos los diccionarios. `typeof` convierte un valor en su tipo. */
export type Dictionary = typeof es
