import type { Localized } from '@/shared/i18n'
import type { Accent } from '@/shared/styles/tokens'

/** Cada categoría tiene una tarjeta en la sección Skills y un título en los diccionarios. */
export type SkillCategoryId =
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'testing'
  | 'tools'
  | 'methodologies'
  | 'marketing'
  | 'learning'

/**
 * - `technical`: tecnologías; salen en la tarjeta y también en la cinta.
 * - `complementary`: metodologías, marketing…; solo salen en su tarjeta.
 * - `learning`: lo que está aprendiendo; solo en su tarjeta, con borde discontinuo.
 */
export type SkillKind = 'technical' | 'complementary' | 'learning'

/**
 * Una skill es el nombre de una tecnología ("React"), que no se traduce,
 * o un concepto ("Tests unitarios"), que se escribe en cada idioma.
 * Solo los nombres de tecnología salen en la cinta.
 */
export type Skill = string | Localized<string>

/** Un grupo de skills, como "Frontend": JavaScript, React… */
export interface SkillCategory {
  readonly id: SkillCategoryId
  readonly kind: SkillKind
  /** Color de la tarjeta de la categoría. */
  readonly accent: Accent
  /** En orden: primero lenguajes o conceptos, luego frameworks y librerías, y al final herramientas. */
  readonly skills: readonly Skill[]
}
