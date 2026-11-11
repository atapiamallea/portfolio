import { Link } from 'react-router'
import { buildProjectDetailPath } from '@/shared/config/routes'
import { useTranslation } from '@/shared/i18n'
import type { Project } from '../../model/project'
import { hasProjectDetail } from '../../model/projectSelectors'
import styles from './ProjectCard.module.scss'

interface ProjectTitleProps {
  project: Project
}

/**
 * Título de la tarjeta. Si el proyecto tiene página de detalle, el título es un enlace que,
 * con su `::after`, cubre toda la tarjeta: se puede pulsar en cualquier parte y el lector
 * de pantalla oye un solo enlace con el nombre del proyecto ("Collapp, ver demo y detalles").
 */
export function ProjectTitle({ project }: ProjectTitleProps) {
  const { dictionary } = useTranslation()
  const detailPath = buildProjectDetailPath(project.id)
  const hiddenHint = `, ${dictionary.projects.cardLinkHint}`

  return (
    <h3 className={styles.title}>
      {hasProjectDetail(project) ? (
        <Link to={detailPath} className={styles.titleLink}>
          {project.title}
          <span className="visually-hidden">{hiddenHint}</span>
        </Link>
      ) : (
        project.title
      )}
    </h3>
  )
}
