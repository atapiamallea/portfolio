import type { Accent } from '@/shared/styles/tokens'

/** Categorías técnicas. "Equipo" y "Siempre aprendiendo" llegan en la Fase 8. */
export type SkillCategoryId = 'frontend' | 'backend' | 'databases' | 'tools'

/** Un grupo de tecnologías, como "Frontend": React, JavaScript… */
export interface SkillCategory {
  readonly id: SkillCategoryId
  /** Color de la tarjeta de la categoría (Fase 8). */
  readonly accent: Accent
  /** Nombres propios: no se traducen. */
  readonly technologies: readonly string[]
}
