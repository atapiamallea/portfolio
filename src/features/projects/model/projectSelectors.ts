import type { Accent } from '@/shared/styles/tokens'
import type { Project } from './project'

/** Posición en la lista (empieza en 0) → número de dos cifras: 0 → "01". */
export function formatProjectNumber(index: number): string {
  const position = index + 1

  return String(position).padStart(2, '0')
}

/** Solo los proyectos con vídeo de demo y textos de detalle tienen página: así no hay páginas a medias. */
export function hasProjectDetail(project: Project): boolean {
  const hasDemoVideo = project.demoVideo !== undefined
  const hasDetailContent = project.detail !== undefined

  return hasDemoVideo && hasDetailContent
}

/** Segundos → minuto del vídeo como se lee en un reproductor: 45 → "0:45", 125 → "2:05". */
export function formatTimestamp(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  const paddedSeconds = String(seconds).padStart(2, '0')

  return `${minutes}:${paddedSeconds}`
}

/** El proyecto con ese id, o `undefined` si no existe (p. ej. una URL mal escrita). */
export function findProjectById(
  projects: readonly Project[],
  projectId: string,
): Project | undefined {
  return projects.find((project) => project.id === projectId)
}

/**
 * Color de la cabecera del detalle: el del proyecto, el mismo que su miniatura en la tarjeta.
 * El cuerpo de la página es papel: un proyecto papel pasa a rosa para que la cabecera se distinga.
 */
export function pickIntroAccent(project: Project): Accent {
  const isPaper = project.accent === 'paper'

  return isPaper ? 'pink' : project.accent
}
