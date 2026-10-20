import type { Dictionary } from './es'

// Tipado con `Dictionary`: si falta o sobra una clave respecto a es.ts, no compila.
export const en: Dictionary = {
  meta: {
    title: 'X — Full Stack Developer',
    description:
      'Portfolio of X, Full Stack developer: projects built with React, Node.js, Express, MongoDB and SQL.',
  },
  localeSwitcher: {
    groupLabel: 'Language',
  },
  hero: {
    availability: 'Open to work',
    title: { start: "Hi, I'm ", highlight: 'X', end: '' },
    subtitle:
      'Recently graduated Full Stack developer. I build interfaces with personality and APIs that work.',
    primaryAction: 'See projects ↓',
    secondaryAction: "Let's talk",
  },
  about: {
    label: '01 — About me',
    title: { start: 'From zero to ', highlight: 'full stack', end: ' in a bootcamp.' },
    paragraphs: [
      'I recently graduated from an intensive full stack development bootcamp. I worked on team projects using agile methodologies and took a solo project from start to finish: design, frontend, backend and deployment.',
      'I like what I build to look good and work well.',
    ],
    stats: {
      projects: 'projects',
      team: 'team',
      solo: 'solo',
    },
  },
  projects: {
    label: '02 — Projects',
    title: { start: 'Selected ', highlight: 'work', end: '' },
    teamTag: 'Team',
    soloTag: 'Solo',
    technologiesLabel: 'Technologies used',
    demoLink: 'Demo ↗',
    codeLink: 'Code ↗',
  },
  skills: {
    label: '03 — Skills',
    title: { start: 'What ', highlight: 'I can do', end: '' },
  },
  contact: {
    label: '04 — Contact',
    title: { start: 'Shall we work ', highlight: 'together', end: '?' },
  },
}
