import type { Dictionary } from './es'

// Tipado con `Dictionary`: si falta o sobra una clave respecto a es.ts, no compila.
export const en: Dictionary = {
  meta: {
    title: 'Andrea — Full Stack Developer',
    description:
      'Andrea Tapia, full stack developer in Barcelona with a background in digital marketing. React, Java and Spring Boot.',
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
      'Full stack developer (React + Java) with a marketing eye: I build products thinking about the user, the business and whoever maintains the code next.',
    primaryAction: 'See projects ↓',
    secondaryAction: "Let's talk",
  },
  about: {
    label: '01 — About me',
    title: { start: 'From clapperboard ', highlight: 'to commit', end: '.' },
    paragraphs: [
      "I didn't change careers: I followed the thread. Producing TV led me to making videos for social media, social media to digital marketing, and a website (on WordPress) to code.",
      "Every stage taught me something: in TV, to work as a team and to deadlines, and in marketing, to think about who's on the other side of the screen. At the full stack bootcamp I brought it all together in Collapp, a platform I developed for creatives in the audiovisual industry, the world I come from :)",
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
    cardLinkHint: 'view demo and details',
    detail: {
      backLink: 'Back to projects',
      demoTitle: 'Demo',
      chaptersTitle: 'Jump to a part of the video',
      sections: {
        demo: { label: 'Demo', title: 'A walk through the app' },
        contributions: { label: 'My contribution', title: 'What I did in the team' },
        architecture: { label: 'Architecture', title: "How it's built" },
        stack: { label: 'Stack', title: 'Technologies and code' },
      },
      videoFallback: 'Your browser cannot play this video.',
      notFoundTitle: 'Project not found',
      notFoundText: 'The link may be mistyped or the project may no longer exist.',
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
