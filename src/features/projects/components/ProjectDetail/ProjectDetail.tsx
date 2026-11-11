import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { buildSectionHref, SECTION_IDS } from '@/shared/config/sections'
import { SITE_OWNER_NAME } from '@/shared/config/site'
import { useFocusPageHeading } from '@/shared/hooks'
import { pickLocalized, useTranslation } from '@/shared/i18n'
import type { Accent } from '@/shared/styles/tokens'
import { ChipList, Section, SectionLabel } from '@/shared/ui'
import { PROJECTS } from '../../data/projects'
import type { Project } from '../../model/project'
import { findProjectById, pickIntroAccent } from '../../model/projectSelectors'
import { ProjectLinks } from '../ProjectCard/ProjectLinks'
import { ArchitectureNotes } from './ArchitectureNotes'
import { ProjectContributions } from './ProjectContributions'
import { ProjectDemoVideo } from './ProjectDemoVideo'
import styles from './ProjectDetail.module.scss'

const DETAIL_TITLE_ID = 'project-detail-title'

// Ids de las partes de la página de detalle (anclas y títulos).
const DETAIL_SECTION_IDS = {
  intro: 'proyecto',
  body: 'detalle',
  demo: 'demo',
  contributions: 'mi-aporte',
  architecture: 'arquitectura',
  stack: 'stack',
} as const

interface ProjectDetailProps {
  projectId: string
}

interface ProjectSectionsProps {
  project: Project
}

interface DetailBlockProps {
  id: string
  /** Texto de la píldora de color: "Demo", "Mi aporte"… */
  label: string
  /** Color de la píldora: es el único color de la cabecera del bloque. */
  labelAccent: Accent
  title: string
  children: ReactNode
}

/**
 * Un bloque del cuerpo del detalle: píldora de color, título pequeño y contenido.
 * No es una Section: todos los bloques comparten un mismo fondo y se separan con espacio,
 * no con líneas, para que se lean como partes de una misma historia.
 */
function DetailBlock({ id, label, labelAccent, title, children }: DetailBlockProps) {
  const titleId = `${id}-title`

  return (
    <section id={id} aria-labelledby={titleId} className={styles.block}>
      <header className={styles.blockHeader}>
        <SectionLabel accent={labelAccent}>{label}</SectionLabel>
        <h2 id={titleId} className={styles.blockTitle}>
          {title}
        </h2>
      </header>
      {children}
    </section>
  )
}

/** "← Volver a proyectos": lleva a la sección Proyectos de la página principal. */
function BackLink() {
  const { dictionary } = useTranslation()
  const projectsHref = buildSectionHref(SECTION_IDS.projects)

  return (
    <Link to={projectsHref} className={styles.backLink}>
      <span aria-hidden="true">←</span>
      {dictionary.projects.detail.backLink}
    </Link>
  )
}

/**
 * Un proyecto que existe: cabecera con el color del proyecto y, debajo, un solo cuerpo en papel
 * con los bloques seguidos (demo, mi aporte, arquitectura, stack). El color está en las píldoras.
 * Los bloques sin datos (p. ej. "Mi aporte" en un proyecto individual) no se pintan.
 * `tabIndex={-1}` en el título: useFocusPageHeading le pasa el foco al entrar.
 */
function ProjectSections({ project }: ProjectSectionsProps) {
  const { locale, dictionary } = useTranslation()
  const projectTexts = dictionary.projects
  const sectionTexts = projectTexts.detail.sections
  const detail = project.detail
  const introduction = detail?.overview ?? project.description
  const localizedIntroduction = pickLocalized(introduction, locale)
  const introAccent = pickIntroAccent(project)
  const demoVideo = project.demoVideo
  const contributions = detail?.contributions
  const architectureNotes = detail?.architecture ?? []
  const hasArchitectureNotes = architectureNotes.length > 0

  return (
    <>
      <Section id={DETAIL_SECTION_IDS.intro} titleId={DETAIL_TITLE_ID} accent={introAccent}>
        <header className={styles.intro}>
          <BackLink />
          <h1 id={DETAIL_TITLE_ID} tabIndex={-1} className={styles.title}>
            {project.title}
          </h1>
          <p className={styles.introduction}>{localizedIntroduction}</p>
        </header>
      </Section>

      <Section id={DETAIL_SECTION_IDS.body} titleId={DETAIL_TITLE_ID} accent="paper" isContinuation>
        <div className={styles.blocks}>
          {demoVideo !== undefined && (
            <DetailBlock
              id={DETAIL_SECTION_IDS.demo}
              label={sectionTexts.demo.label}
              labelAccent="green"
              title={sectionTexts.demo.title}
            >
              <ProjectDemoVideo video={demoVideo} projectTitle={project.title} />
            </DetailBlock>
          )}

          {contributions !== undefined && (
            <DetailBlock
              id={DETAIL_SECTION_IDS.contributions}
              label={sectionTexts.contributions.label}
              labelAccent="pink"
              title={sectionTexts.contributions.title}
            >
              <ProjectContributions contributions={contributions} />
            </DetailBlock>
          )}

          {hasArchitectureNotes && (
            <DetailBlock
              id={DETAIL_SECTION_IDS.architecture}
              label={sectionTexts.architecture.label}
              labelAccent="violet"
              title={sectionTexts.architecture.title}
            >
              <ArchitectureNotes notes={architectureNotes} />
            </DetailBlock>
          )}

          <DetailBlock
            id={DETAIL_SECTION_IDS.stack}
            label={sectionTexts.stack.label}
            labelAccent="orange"
            title={sectionTexts.stack.title}
          >
            <div className={styles.stack}>
              <ChipList label={projectTexts.technologiesLabel} items={project.technologies} />
              <ProjectLinks project={project} />
            </div>
          </DetailBlock>
        </div>
      </Section>
    </>
  )
}

/** Mensaje para una URL con un id que no corresponde a ningún proyecto. */
function ProjectNotFound() {
  const { dictionary } = useTranslation()
  const detailTexts = dictionary.projects.detail

  return (
    <Section id={DETAIL_SECTION_IDS.intro} titleId={DETAIL_TITLE_ID} accent="pink">
      <header className={styles.intro}>
        <BackLink />
        <h1 id={DETAIL_TITLE_ID} tabIndex={-1} className={styles.title}>
          {detailTexts.notFoundTitle}
        </h1>
        <p className={styles.introduction}>{detailTexts.notFoundText}</p>
      </header>
    </Section>
  )
}

/** Página de detalle: las secciones del proyecto o el aviso de que no existe. */
export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const { dictionary } = useTranslation()
  const project = findProjectById(PROJECTS, projectId)
  const pageHeading =
    project === undefined ? dictionary.projects.detail.notFoundTitle : project.title
  const documentTitle = `${pageHeading} — ${SITE_OWNER_NAME}`

  useFocusPageHeading(DETAIL_TITLE_ID, projectId)

  return (
    <>
      {/* React 19 lleva este <title> al <head> mientras la página está montada. */}
      <title>{documentTitle}</title>
      {project === undefined ? <ProjectNotFound /> : <ProjectSections project={project} />}
    </>
  )
}
