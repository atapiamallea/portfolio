import type { Project } from '../../model/project'
import { formatProjectNumber } from '../../model/projectSelectors'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import styles from './ProjectGrid.module.scss'

interface ProjectGridProps {
  projects: readonly Project[]
}

// `map` pasa también la posición: de ella sale el número de la tarjeta.
function renderProjectCard(project: Project, index: number) {
  const number = formatProjectNumber(index)

  return (
    <li key={project.id} className={styles.item}>
      <ProjectCard project={project} number={number} />
    </li>
  )
}

/** Lista de tarjetas de proyecto, en tantas columnas como quepan. */
export function ProjectGrid({ projects }: ProjectGridProps) {
  const projectCards = projects.map(renderProjectCard)

  return <ul className={styles.grid}>{projectCards}</ul>
}
