import { useParams } from 'react-router'
import { ProjectDetail } from '@/features/projects'

// El genérico describe los parámetros de la ruta. Aun así, `projectId` llega como
// `string | undefined`: TypeScript no puede saber desde aquí qué ruta pinta este componente.
type ProjectDetailParams = { projectId: string }

/** Página '/proyectos/:projectId': lee el id de la URL y se lo pasa al detalle del proyecto. */
export function ProjectDetailPage() {
  const { projectId = '' } = useParams<ProjectDetailParams>()

  return <ProjectDetail projectId={projectId} />
}
