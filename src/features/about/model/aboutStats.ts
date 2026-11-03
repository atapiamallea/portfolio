import type { ProjectSummary } from '@/features/projects'

/** 'total' | 'team' | 'solo': las mismas claves que el resumen de proyectos. */
export type AboutStatKey = keyof ProjectSummary

export interface AboutStat {
  readonly key: AboutStatKey
  readonly value: number
}

// El orden de la lista es el orden en pantalla.
const STAT_ORDER: readonly AboutStatKey[] = ['total', 'team', 'solo']

function buildStat(key: AboutStatKey, summary: ProjectSummary): AboutStat {
  return { key, value: summary[key] }
}

/** Resumen de proyectos → las filas de estadísticas del reverso de la credencial. */
export function buildAboutStats(summary: ProjectSummary): AboutStat[] {
  const stats: AboutStat[] = []

  for (const key of STAT_ORDER) {
    stats.push(buildStat(key, summary))
  }

  return stats
}
