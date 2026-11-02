import { pickLocalized, useTranslation } from '@/shared/i18n'
import type { Accent } from '@/shared/styles/tokens'
import { ChipList, GlassPanel, Tag } from '@/shared/ui'
import type { Project, ProjectTeamType } from '../../model/project'
import { ProjectLinks } from './ProjectLinks'
import { ProjectThumbnail } from './ProjectThumbnail'
import styles from './ProjectCard.module.scss'

// Record obliga a dar un color a cada tipo: si se añade uno nuevo, no compila hasta elegirlo.
const TEAM_TYPE_ACCENT: Record<ProjectTeamType, Accent> = {
  team: 'violet-deep',
  solo: 'lime',
}

interface ProjectCardProps {
  project: Project
  /** "01", "02"…: posición del proyecto en la lista. */
  number: string
}

/** Tarjeta de un proyecto: etiqueta, miniatura, título, descripción, tecnologías y enlaces. */
export function ProjectCard({ project, number }: ProjectCardProps) {
  const { locale, dictionary } = useTranslation()
  const projectTexts = dictionary.projects
  const tagLabel = projectTexts.teamTypeTags[project.teamType]
  const tagAccent = TEAM_TYPE_ACCENT[project.teamType]
  const description = pickLocalized(project.description, locale)

  return (
    <GlassPanel element="article" className={styles.card}>
      <Tag accent={tagAccent} className={styles.tag}>
        {tagLabel}
      </Tag>
      <ProjectThumbnail project={project} number={number} />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{description}</p>
      <ChipList label={projectTexts.technologiesLabel} items={project.technologies} />
      <ProjectLinks project={project} />
    </GlassPanel>
  )
}
