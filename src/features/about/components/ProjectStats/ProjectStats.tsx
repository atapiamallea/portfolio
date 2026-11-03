import { PROJECTS, summarizeProjects } from '@/features/projects'
import { useTranslation } from '@/shared/i18n'
import { buildAboutStats, type AboutStat } from '../../model/aboutStats'
import { StatItem } from './StatItem'
import styles from './ProjectStats.module.scss'

// Se calculan una vez a partir de los datos de proyectos: nunca se escriben a mano.
const PROJECT_SUMMARY = summarizeProjects(PROJECTS)
const ABOUT_STATS = buildAboutStats(PROJECT_SUMMARY)

function renderStat(stat: AboutStat) {
  return <StatItem key={stat.key} stat={stat} />
}

/** Estadísticas de "Sobre mí": total de proyectos, en equipo e individuales. */
export function ProjectStats() {
  const { dictionary } = useTranslation()
  const statItems = ABOUT_STATS.map(renderStat)

  return (
    <ul aria-label={dictionary.about.stats.label} className={styles.stats}>
      {statItems}
    </ul>
  )
}
