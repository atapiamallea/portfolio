import { SECTION_IDS } from '@/shared/config/sections'
import { useTranslation } from '@/shared/i18n'
import { HighlightedText, Section, SectionHeader } from '@/shared/ui'
import { PROJECTS } from '../../data/projects'
import { ProjectGrid } from '../ProjectGrid/ProjectGrid'

const PROJECTS_TITLE_ID = `${SECTION_IDS.projects}-title`

/** Sección "Proyectos": cabecera y la rejilla con todas las tarjetas. */
export function ProjectsSection() {
  const { dictionary } = useTranslation()
  const projectTexts = dictionary.projects

  return (
    <Section id={SECTION_IDS.projects} titleId={PROJECTS_TITLE_ID} accent="pink">
      <SectionHeader
        label={projectTexts.label}
        titleId={PROJECTS_TITLE_ID}
        title={<HighlightedText text={projectTexts.title} />}
      />
      <ProjectGrid projects={PROJECTS} />
    </Section>
  )
}
