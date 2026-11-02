import type { SkillCategory } from '../model/skill'

// Fuente de verdad de las skills. La cinta de tecnologías (y en la Fase 8, las tarjetas)
// se generan a partir de aquí: para añadir una tecnología basta con escribirla en su categoría.
//
// `satisfies` comprueba que cada objeto cumple SkillCategory sin perder los valores exactos
// que deduce `as const`. Si falta un campo o un `accent` no existe, no compila.
export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    accent: 'lime',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Sass'],
  },
  {
    id: 'backend',
    accent: 'violet',
    technologies: ['Node.js', 'Express', 'API REST'],
  },
  {
    id: 'databases',
    accent: 'pink',
    technologies: ['MongoDB', 'SQL'],
  },
  {
    id: 'tools',
    accent: 'orange',
    technologies: ['Git', 'GitHub', 'Postman', 'Figma'],
  },
] as const satisfies readonly SkillCategory[]
