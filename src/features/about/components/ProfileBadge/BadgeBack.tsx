import { useTranslation } from '@/shared/i18n'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import { PROFILE } from '../../data/profile'
import { ProjectStats } from '../ProjectStats/ProjectStats'
import styles from './ProfileBadge.module.scss'

const FEATURED_TECHNOLOGIES = PROFILE.featuredTechnologies.join(' · ')

interface BadgeBackProps {
  /** La cara que no se ve lleva `inert`: ni Tab ni el lector de pantalla llegan a ella. */
  isHidden: boolean
}

/** Cara trasera: rol, estadísticas calculadas de proyectos y stack principal. */
export function BadgeBack({ isHidden }: BadgeBackProps) {
  const { dictionary } = useTranslation()
  const badgeTexts = dictionary.about.badge
  const faceClassName = joinClassNames(styles.face, styles.back)

  return (
    <div className={faceClassName} inert={isHidden}>
      <div className={styles.backContent}>
        <p className={styles.backRole}>{badgeTexts.role}</p>
        <ProjectStats />
        <div className={styles.stack}>
          <p className={styles.stackLabel}>{badgeTexts.stackLabel}</p>
          <p className={styles.stackList}>{FEATURED_TECHNOLOGIES}</p>
        </div>
      </div>
    </div>
  )
}
