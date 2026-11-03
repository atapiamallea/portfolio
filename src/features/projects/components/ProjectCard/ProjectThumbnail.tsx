import { pickLocalized, useTranslation } from '@/shared/i18n'
import type { Project } from '../../model/project'
import styles from './ProjectCard.module.scss'

interface ProjectThumbnailProps {
  project: Project
  /** "01", "02"…: se muestra si el proyecto no tiene imagen. */
  number: string
}

/** Captura del proyecto o, si no tiene, su número sobre el color del proyecto. */
export function ProjectThumbnail({ project, number }: ProjectThumbnailProps) {
  const { locale } = useTranslation()
  const image = project.image
  const imageAlt = image === undefined ? '' : pickLocalized(image.alt, locale)

  return (
    <div className={styles.thumbnail} data-accent={project.accent}>
      {image === undefined ? (
        <span aria-hidden="true">{number}</span>
      ) : (
        <img src={image.src} alt={imageAlt} className={styles.image} loading="lazy" />
      )}
    </div>
  )
}
