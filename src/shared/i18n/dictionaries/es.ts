// Fuente de verdad de los textos: el tipo `Dictionary` se deduce de este objeto.
// Los títulos con una palabra resaltada son objetos `title: { start, highlight, end }`
// que pinta el componente HighlightedText, así el JSX no contiene texto.
export const es = {
  meta: {
    title: 'Andrea — Full Stack Developer',
    description:
      'Andrea Tapia, desarrolladora full stack en Barcelona con background en marketing digital. React, Java y Spring Boot.',
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
    title: { start: 'Hola, soy ', highlight: 'Andrea', end: '' },
    subtitle:
      'Desarrolladora full stack (React + Java) con ojo de marketing: construyo producto pensando en el usuario, en el negocio y en quien mantendrá el código después.',
    primaryAction: 'Ver proyectos ↓',
    secondaryAction: 'Hablemos',
  },
  about: {
    label: '01 — Sobre mí',
    title: { start: 'De la claqueta ', highlight: 'al commit', end: '.' },
    paragraphs: [
      // Cuenta la evolución como una cadena: cada etapa llevó a la siguiente.
      'No cambié de carrera: tiré del hilo. Producir televisión me llevó a crear vídeos para redes, las redes, al marketing digital, y una web (en WordPress) al código.',
      'De cada etapa aprendí algo: en la tele, a trabajar en equipo y con plazos, en el marketing, a pensar en quien está al otro lado de la pantalla. En el bootcamp full stack lo junté todo en Collapp, una plataforma que desarrollé para creativos del sector audiovisual, el mundo del que vengo :)',
    ],
    badge: {
      role: 'Full Stack Developer',
      flipButton: 'Dar la vuelta a la credencial',
      socialLabel: 'Redes',
    },
    // Reverso de la credencial: lo personal, fuera del código.
    personal: {
      title: 'Fuera del código',
      // "Desde 2021" y no "hace 5 años": así el texto no caduca.
      origin: 'De La Paz, Bolivia. En Barcelona desde 2021.',
      factsLabel: 'Datos curiosos',
      facts: [
        'Mi hobby: el maquillaje artístico y de efectos especiales.',
        'Diseño y hago mis propios pendientes.',
        'Me encanta todo lo creativo, dentro y fuera de la pantalla.',
      ],
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
    // Solo para lectores de pantalla: el título de la tarjeta enlaza a su página de detalle.
    cardLinkHint: 'ver demo y detalles',
    detail: {
      backLink: 'Volver a proyectos',
      demoTitle: 'Demo',
      chaptersTitle: 'Ir a una parte del vídeo',
      // Cabecera de cada bloque del detalle: rótulo de color y un título pequeño que no lo repite.
      // Sin números en el rótulo: los bloques opcionales dejarían huecos en la cuenta.
      sections: {
        demo: { label: 'Demo', title: 'Recorrido por la app' },
        contributions: { label: 'Mi aporte', title: 'Qué hice en el equipo' },
        architecture: { label: 'Arquitectura', title: 'Cómo está construido' },
        stack: { label: 'Stack', title: 'Tecnologías y código' },
      },
      videoFallback: 'Tu navegador no puede reproducir este vídeo.',
      notFoundTitle: 'Proyecto no encontrado',
      notFoundText: 'Puede que el enlace esté mal escrito o que el proyecto ya no exista.',
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
