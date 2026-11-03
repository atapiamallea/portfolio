import { SECTION_IDS } from '@/shared/config/sections'
import { useTranslation } from '@/shared/i18n'
import { HighlightedText, Section, SectionHeader } from '@/shared/ui'
import { SKILL_CATEGORIES } from '../../data/skills'
import type { SkillCategory } from '../../model/skill'
import { SkillCard } from '../SkillCard/SkillCard'
import styles from './SkillsSection.module.scss'

const SKILLS_TITLE_ID = `${SECTION_IDS.skills}-title`

function renderSkillCard(category: SkillCategory) {
  return (
    <li key={category.id} className={styles.item}>
      <SkillCard category={category} />
    </li>
  )
}

/** Sección "Skills": una tarjeta por categoría, sobre fondo oscuro. */
export function SkillsSection() {
  const { dictionary } = useTranslation()
  const skillsTexts = dictionary.skills
  const skillCards = SKILL_CATEGORIES.map(renderSkillCard)

  return (
    <Section id={SECTION_IDS.skills} titleId={SKILLS_TITLE_ID} accent="ink">
      <SectionHeader
        label={skillsTexts.label}
        labelAccent="green"
        titleId={SKILLS_TITLE_ID}
        title={<HighlightedText text={skillsTexts.title} />}
      />
      <ul className={styles.grid}>{skillCards}</ul>
    </Section>
  )
}
