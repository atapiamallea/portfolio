import type { Project } from './project'

/** Cuántos proyectos hay en total, en equipo e individuales ("Sobre mí", Fase 6). */
export interface ProjectSummary {
  readonly total: number
  readonly team: number
  readonly solo: number
}

function isTeamProject(project: Project): boolean {
  return project.teamType === 'team'
}

function isSoloProject(project: Project): boolean {
  return project.teamType === 'solo'
}

export function summarizeProjects(projects: readonly Project[]): ProjectSummary {
  const team = projects.filter(isTeamProject).length
  const solo = projects.filter(isSoloProject).length

  return { total: projects.length, team, solo }
}

/** Posición en la lista (empieza en 0) → número de dos cifras: 0 → "01". */
export function formatProjectNumber(index: number): string {
  const position = index + 1

  return String(position).padStart(2, '0')
}
