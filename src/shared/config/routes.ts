// Rutas de la aplicación. `:projectId` es un parámetro: React Router lo lee con useParams.
export const ROUTES = {
  home: '/',
  projectDetail: '/proyectos/:projectId',
} as const

/** Ruta a la página de detalle de un proyecto: 'fundacion-verisure' → '/proyectos/fundacion-verisure'. */
export function buildProjectDetailPath(projectId: string): string {
  return ROUTES.projectDetail.replace(':projectId', projectId)
}
