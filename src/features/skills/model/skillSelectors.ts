import { pickLocalized, type Locale } from '@/shared/i18n'
import type { Skill, SkillCategory } from './skill'

function isTechnical(category: SkillCategory): boolean {
  return category.kind === 'technical'
}

/** Type guard: si devuelve `true`, TypeScript sabe que la skill es un `string`. */
function isTechnologyName(skill: Skill): skill is string {
  return typeof skill === 'string'
}

function selectTechnologyNames(category: SkillCategory): string[] {
  return category.skills.filter(isTechnologyName)
}

/**
 * Los nombres de tecnología de las categorías técnicas, en orden y sin repetir.
 * Los conceptos traducibles ("Tests unitarios") se quedan fuera: no son tecnologías.
 * Como `stream().filter(…).flatMap(…).distinct()` en Java.
 */
export function selectMarqueeTechnologies(categories: readonly SkillCategory[]): string[] {
  const technicalCategories = categories.filter(isTechnical)
  const allTechnologies = technicalCategories.flatMap(selectTechnologyNames)
  const uniqueTechnologies = new Set(allTechnologies)

  return [...uniqueTechnologies]
}

/** El texto de una skill en el idioma actual: los nombres de tecnología se quedan igual. */
export function translateSkill(skill: Skill, locale: Locale): string {
  return isTechnologyName(skill) ? skill : pickLocalized(skill, locale)
}

/** Todas las skills de una categoría, ya en el idioma actual. */
export function translateSkills(skills: readonly Skill[], locale: Locale): string[] {
  const translatedSkills: string[] = []

  for (const skill of skills) {
    translatedSkills.push(translateSkill(skill, locale))
  }

  return translatedSkills
}
