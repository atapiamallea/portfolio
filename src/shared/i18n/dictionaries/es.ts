// Fuente de verdad de los textos: el tipo `Dictionary` se deduce de este objeto.
// Los títulos con una palabra resaltada son objetos `title: { start, highlight, end }`
// que pinta el componente HighlightedText, así el JSX no contiene texto.
export const es = {
  meta: {
    title: 'Andrea — Full Stack Developer',
    description:
      'Portfolio de Andrea, desarrolladora Full Stack: aplicaciones con React, Java, Spring Boot y PostgreSQL.',
  },
  // Textos que usan varias secciones.
  common: {
    newTabNotice: 'se abre en una pestaña nueva',
    // Las claves coinciden con SocialNetwork de shared/config/site.ts.
    networkNames: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Correo',
    },
  },
  localeSwitcher: {
    groupLabel: 'Idioma',
  },
  themeToggle: {
    label: 'Modo oscuro',
  },
  navigation: {
    label: 'Principal',
    menuButton: 'Menú',
    skipLink: 'Saltar al contenido',
    links: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Skills',
      contact: 'Contacto',
    },
  },
  footer: {
    text: 'Hecho con React, café y mucho CSS.',
  },
  marquee: {
    label: 'Tecnologías',
    pause: 'Pausar la cinta',
  },
  hero: {
    availability: 'Disponible para trabajar',
    title: { start: 'Hola, soy ', highlight: 'Andrea', end: '' },
    subtitle:
      'Desarrolladora Full Stack con React y Java. Construyo interfaces con personalidad y APIs que funcionan.',
    primaryAction: 'Ver proyectos ↓',
    secondaryAction: 'Hablemos',
  },
  about: {
    label: '01 — Sobre mí',
    title: { start: 'De la claqueta ', highlight: 'al commit', end: '.' },
    paragraphs: [
      'Vengo de la producción audiovisual y la estrategia digital, donde aprendí a resolver imprevistos a buen ritmo y a conectar productos con personas.',
      'Hoy construyo aplicaciones full stack con React, Java y Spring Boot: interfaces modulares y accesibles, APIs REST seguras y código limpio pensado para crecer.',
      'He trabajado en equipo con Scrum en proyectos grupales y he llevado uno individual de principio a fin: diseño, frontend, backend y tests.',
    ],
    // Las claves total / team / solo coinciden con ProjectSummary de features/projects.
    stats: {
      label: 'Proyectos en números',
      total: { one: 'proyecto', other: 'proyectos' },
      team: { one: 'en equipo', other: 'en equipo' },
      solo: { one: 'individual', other: 'individuales' },
    },
    badge: {
      role: 'Full Stack Developer',
      flipButton: 'Dar la vuelta a la credencial',
      socialLabel: 'Redes',
      stackLabel: 'Stack principal',
    },
  },
  projects: {
    label: '02 — Proyectos',
    title: { start: 'Trabajos ', highlight: 'seleccionados', end: '' },
    // Las claves coinciden con ProjectTeamType y RepositoryKind de features/projects.
    teamTypeTags: {
      team: 'Grupal',
      solo: 'Individual',
    },
    technologiesLabel: 'Tecnologías usadas',
    demoLink: 'Demo',
    repositoryLinks: {
      frontend: 'Código frontend',
      backend: 'Código backend',
    },
  },
  skills: {
    label: '03 — Skills',
    title: { start: 'Lo que ', highlight: 'sé hacer', end: '' },
    // Las claves son los SkillCategoryId: si falta una categoría, SkillCard no compila.
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bases de datos',
      testing: 'Testing',
      tools: 'Herramientas',
      methodologies: 'Metodologías',
      marketing: 'Marketing digital',
      learning: 'Siempre aprendiendo',
    },
  },
  contact: {
    label: '04 — Contacto',
    title: { start: '¿Trabajamos ', highlight: 'juntos', end: '?' },
    intro: '¿Tienes un proyecto o una vacante? Escríbeme y hablamos.',
    // El texto del botón cambia con el estado de la copia (CopyStatus).
    copyButton: {
      idle: 'Copiar correo',
      copied: '¡Copiado!',
      failed: 'No se pudo copiar',
    },
    linksLabel: 'Otros enlaces',
    cv: 'CV (PDF)',
    cvNotice: 'descarga un PDF',
  },
}

/** La forma que deben cumplir todos los diccionarios. `typeof` convierte un valor en su tipo. */
export type Dictionary = typeof es
