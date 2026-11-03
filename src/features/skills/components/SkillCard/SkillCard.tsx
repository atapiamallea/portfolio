import { useTranslation } from '@/shared/i18n'
import type { SkillCategory } from '../../model/skill'
import { translateSkills } from '../../model/skillSelectors'
import styles from './SkillCard.module.scss'

interface SkillCardProps {
  category: SkillCategory
}

function renderSkill(skill: string) {
  return (
    <li key={skill} className={styles.skill}>
      {skill}
    </li>
  )
}

/** Tarjeta de una categoría: título traducido y la lista de skills. */
export function SkillCard({ category }: SkillCardProps) {
  const { locale, dictionary } = useTranslation()
  const title = dictionary.skills.categories[category.id]
  const translatedSkills = translateSkills(category.skills, locale)
  const skills = translatedSkills.map(renderSkill)

  return (
    <div className={styles.card} data-accent={category.accent} data-kind={category.kind}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>{skills}</ul>
    </div>
  )
}
