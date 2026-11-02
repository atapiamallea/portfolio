import { useTranslation, type Dictionary } from '@/shared/i18n'
import type { Project } from '../../model/project'
import styles from './ProjectCard.module.scss'

interface ProjectLinkData {
  href: string
  label: string
  projectTitle: string
}

interface ProjectLinksProps {
  project: Project
}

/** Demo (si la hay) y un enlace por repositorio, en ese orden. */
function buildProjectLinks(
  project: Project,
  projectTexts: Dictionary['projects'],
): ProjectLinkData[] {
  const links: ProjectLinkData[] = []

  if (project.demoUrl !== undefined) {
    links.push({ href: project.demoUrl, label: projectTexts.demoLink, projectTitle: project.title })
  }

  for (const repository of project.repositories) {
    const label = projectTexts.repositoryLinks[repository.kind]
    links.push({ href: repository.url, label, projectTitle: project.title })
  }

  return links
}

/**
 * Enlace externo. Se ve "Código frontend ↗"; el lector de pantalla oye además de qué
 * proyecto es y que se abre en otra pestaña: "Código frontend (Collapp, se abre en…)".
 */
function ProjectLink({ href, label, projectTitle }: ProjectLinkData) {
  const { dictionary } = useTranslation()
  const hiddenContext = ` (${projectTitle}, ${dictionary.projects.newTabNotice})`

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
      {label}
      <span aria-hidden="true"> ↗</span>
      <span className="visually-hidden">{hiddenContext}</span>
    </a>
  )
}

function renderProjectLink(link: ProjectLinkData) {
  return <ProjectLink key={link.href} {...link} />
}

export function ProjectLinks({ project }: ProjectLinksProps) {
  const { dictionary } = useTranslation()
  const links = buildProjectLinks(project, dictionary.projects)
  const linkElements = links.map(renderProjectLink)

  return <div className={styles.links}>{linkElements}</div>
}
