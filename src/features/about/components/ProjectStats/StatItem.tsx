import { pluralize, useTranslation } from '@/shared/i18n'
import type { AboutStat } from '../../model/aboutStats'
import styles from './ProjectStats.module.scss'

interface StatItemProps {
  stat: AboutStat
}

/** Una fila: número grande y su texto en singular o plural ("1 individual" / "2 individuales"). */
export function StatItem({ stat }: StatItemProps) {
  const { locale, dictionary } = useTranslation()
  const labelForms = dictionary.about.stats[stat.key]
  const label = pluralize(stat.value, labelForms, locale)

  return (
    <li className={styles.stat}>
      <strong className={styles.value}>{stat.value}</strong>
      <span className={styles.label}>{label}</span>
    </li>
  )
}
