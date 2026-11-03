import { useTranslation } from '@/shared/i18n'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import styles from './ProfileBadge.module.scss'

interface BadgeBackProps {
  /** La cara que no se ve lleva `inert`: ni Tab ni el lector de pantalla llegan a ella. */
  isHidden: boolean
}

// Los datos son textos fijos y distintos entre sí: sirven como `key`.
function renderFact(fact: string) {
  return (
    <li key={fact} className={styles.fact}>
      {fact}
    </li>
  )
}

/** Cara trasera: lo personal, fuera del código. De dónde es y algunos datos curiosos. */
export function BadgeBack({ isHidden }: BadgeBackProps) {
  const { dictionary } = useTranslation()
  const personalTexts = dictionary.about.personal
  const faceClassName = joinClassNames(styles.face, styles.back)
  const facts = personalTexts.facts.map(renderFact)

  return (
    <div className={faceClassName} inert={isHidden}>
      <div className={styles.backContent}>
        <p className={styles.backTitle}>{personalTexts.title}</p>
        <p className={styles.origin}>{personalTexts.origin}</p>
        <div className={styles.facts}>
          <p className={styles.factsLabel}>{personalTexts.factsLabel}</p>
          <ul className={styles.factList}>{facts}</ul>
        </div>
      </div>
    </div>
  )
}
