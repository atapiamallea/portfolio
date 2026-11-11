import { pickLocalized, useTranslation, type Localized } from '@/shared/i18n'
import styles from './ProjectDetail.module.scss'

interface ProjectContributionsProps {
  contributions: Localized<readonly string[]>
}

// Cada punto es un texto distinto: sirve como `key`.
function renderContribution(contribution: string) {
  return (
    <li key={contribution} className={styles.contribution}>
      {contribution}
    </li>
  )
}

/** "Mi aporte en el proyecto": qué hice yo en un proyecto en equipo, a dos columnas en escritorio. */
export function ProjectContributions({ contributions }: ProjectContributionsProps) {
  const { locale } = useTranslation()
  const localizedContributions = pickLocalized(contributions, locale)
  const contributionItems = localizedContributions.map(renderContribution)

  return <ul className={styles.contributionList}>{contributionItems}</ul>
}
