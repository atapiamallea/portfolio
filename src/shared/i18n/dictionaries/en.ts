import type { Dictionary } from './es'

// Tipado con `Dictionary`: si falta o sobra una clave respecto a es.ts, no compila.
export const en: Dictionary = {
  meta: {
    title: 'Andrea — Full Stack Developer',
    description:
      'Portfolio of Andrea, Full Stack developer: applications built with React, Java, Spring Boot and PostgreSQL.',
  },
  common: {
    newTabNotice: 'opens in a new tab',
    networkNames: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
  },
  localeSwitcher: {
    groupLabel: 'Language',
  },
  themeToggle: {
    label: 'Dark mode',
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
    title: { start: "Hi, I'm ", highlight: 'Andrea', end: '' },
    subtitle:
      'Full Stack developer working with React and Java. I build interfaces with personality and APIs that work.',
    primaryAction: 'See projects ↓',
    secondaryAction: "Let's talk",
  },
  about: {
    label: '01 — About me',
    title: { start: 'From clapperboard ', highlight: 'to commit', end: '.' },
    paragraphs: [
      'Full Stack developer working with Java and React. I come from digital marketing, and that experience helps me think beyond the code: what the client needs, what makes sense for the business and how to build it in a simple, scalable way.',
      "On real projects I've worked in a Scrum team, and I've also taken a solo one from start to finish: design, frontend, backend and tests.",
    ],
    badge: {
      role: 'Full Stack Developer',
      flipButton: 'Flip the badge',
      socialLabel: 'Social links',
    },
    personal: {
      title: 'Off the clock',
      origin: 'From La Paz, Bolivia. Living in Barcelona since 2021.',
      factsLabel: 'Fun facts',
      facts: [
        'From clapperboard to commit: 4 years at a TV channel, then digital marketing, and now development.',
        'My hobby: artistic and special effects makeup.',
        'I design and make my own earrings.',
        'I love anything creative, on and off the screen.',
      ],
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
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      testing: 'Testing',
      tools: 'Tools',
      methodologies: 'Methodologies',
      marketing: 'Digital marketing',
      learning: 'Always learning',
    },
  },
  contact: {
    label: '04 — Contact',
    title: { start: 'Shall we work ', highlight: 'together', end: '?' },
    intro: 'Got a project or an open role? Write to me and let’s talk.',
    copyButton: {
      idle: 'Copy email',
      copied: 'Copied!',
      failed: 'Could not copy',
    },
    linksLabel: 'Other links',
    cv: 'CV (PDF)',
    cvNotice: 'downloads a PDF',
  },
}
