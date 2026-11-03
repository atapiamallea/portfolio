import type { SkillCategory } from '../model/skill'

// Fuente de verdad de las skills. Las tarjetas de la sección Skills y la cinta de tecnologías
// se generan a partir de aquí: para añadir una skill basta con escribirla en su categoría.
// La cinta solo muestra los nombres de tecnología de las categorías `technical`.
//
// Orden dentro de cada tarjeta: primero lenguajes o conceptos, luego frameworks y
// librerías, y al final herramientas. Los conceptos se escriben en los dos idiomas.
//
// `satisfies` comprueba que cada objeto cumple SkillCategory sin perder los valores exactos
// que deduce `as const`. Si falta un campo o un `accent` no existe, no compila.
export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    kind: 'technical',
    accent: 'green',
    skills: [
      // Lenguajes
      'HTML',
      'CSS',
      'Sass',
      // Frameworks y librerías
      'React',
      'React Router',
      'Tailwind CSS',
      'Axios',
      // Herramientas
      'Vite',
    ],
  },
  {
    id: 'backend',
    kind: 'technical',
    accent: 'violet',
    skills: [
      // Lenguaje
      'Java',
      'JavaScript',
      // Frameworks
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      // Estándares
      'API REST',
      'JWT',
      // Herramientas
      'Maven',
    ],
  },
  {
    id: 'databases',
    kind: 'technical',
    accent: 'pink',
    skills: ['MySQL', 'PostgreSQL', 'H2'],
  },
  {
    id: 'testing',
    kind: 'technical',
    accent: 'orange',
    skills: [
      // Tipos de test
      { es: 'Tests unitarios', en: 'Unit testing' },
      { es: 'Tests de integración', en: 'Integration testing' },
      // Frameworks: primero los de Java y luego los de JavaScript
      'JUnit',
      'Mockito',
      'Vitest',
      'React Testing Library',
      // Herramientas
      'Postman',
    ],
  },
  {
    id: 'tools',
    kind: 'technical',
    accent: 'blue',
    skills: ['Git', 'GitHub', 'Jira', 'Confluence', 'Figma', 'Canva', 'Claude Code'],
  },
  {
    id: 'methodologies',
    kind: 'complementary',
    accent: 'paper',
    skills: ['Scrum', 'Kanban', 'Code review', 'Clean Code', 'SOLID'],
  },
  {
    id: 'marketing',
    kind: 'complementary',
    accent: 'violet',
    skills: ['Google Analytics', 'Meta Ads', 'Google Ads', 'WordPress (elementor)'],
  },
  {
    id: 'learning',
    kind: 'learning',
    accent: 'ink',
    skills: ['TypeScript', 'Docker'],
  },
] as const satisfies readonly SkillCategory[]
