import type { SkillCategory } from './skill'

function selectTechnologies(category: SkillCategory): readonly string[] {
  return category.technologies
}

/**
 * Todas las tecnologías de todas las categorías, en orden y sin repetir.
 * Como `stream().flatMap(…).distinct()` en Java.
 */
export function selectMarqueeTechnologies(categories: readonly SkillCategory[]): string[] {
  const allTechnologies = categories.flatMap(selectTechnologies)
  const uniqueTechnologies = new Set(allTechnologies)

  return [...uniqueTechnologies]
}
