import type { Dictionary } from './es'

// Tipado con `Dictionary`: si falta o sobra una clave respecto a es.ts, no compila.
export const en: Dictionary = {
  meta: {
    title: 'Andrea — Full Stack Developer',
    description:
      'Portfolio of Andrea, Full Stack developer: projects built with React, Node.js, Express, MongoDB and SQL.',
  },
  common: {
    newTabNotice: 'opens in a new tab',
  },
  localeSwitcher: {
    groupLabel: 'Language',
  },
  navigation: {
    label: 'Main',
    menuButton: 'Menu',
    skipLink: 'Skip to content',
    links: {
      about: 'About me',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
  },
  footer: {
    text: 'Made with React, coffee and a lot of CSS.',
  },
  marquee: {
    label: 'Technologies',
    pause: 'Pause the ticker',
  },
  hero: {
    availability: 'Open to work',
    title: { start: "Hi, I'm ", highlight: 'Andrea', end: '' },
    subtitle:
      'Recently graduated Full Stack developer. I build interfaces with personality and APIs that work.',
    primaryAction: 'See projects ↓',
    secondaryAction: "Let's talk",
  },
  about: {
    label: '01 — About me',
    title: { start: 'From clapperboard ', highlight: 'to commit', end: '.' },
    paragraphs: [
      'I come from audiovisual production and digital strategy, where I learned to handle the unexpected at a fast pace and to connect products with people.',
      'Today I build full stack applications with React, Java and Spring Boot: modular, accessible interfaces, secure REST APIs and clean code designed to grow.',
      'I have worked in teams with Scrum on group projects and taken a solo one from start to finish: design, frontend, backend and tests.',
    ],
    stats: {
      label: 'Projects in numbers',
      total: { one: 'project', other: 'projects' },
      team: { one: 'team project', other: 'team projects' },
      solo: { one: 'solo project', other: 'solo projects' },
    },
    badge: {
      role: 'Full Stack Developer',
      flipButton: 'Flip the badge',
      socialLabel: 'Social links',
      stackLabel: 'Main stack',
      networkNames: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Email',
      },
    },
  },
  projects: {
    label: '02 — Projects',
    title: { start: 'Selected ', highlight: 'work', end: '' },
    teamTypeTags: {
      team: 'Team',
      solo: 'Solo',
    },
    technologiesLabel: 'Technologies used',
    demoLink: 'Demo',
    repositoryLinks: {
      frontend: 'Frontend code',
      backend: 'Backend code',
    },
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
