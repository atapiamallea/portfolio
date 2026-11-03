import { useState } from 'react'
import { useTranslation } from '@/shared/i18n'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import { BadgeBack } from './BadgeBack'
import { BadgeFront } from './BadgeFront'
import styles from './ProfileBadge.module.scss'

function invertFlipped(isFlipped: boolean): boolean {
  return !isFlipped
}

// Icono "arrow-right-left" de Lucide (licencia ISC): dos flechas en sentidos contrarios.
function FlipIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className={styles.flipIcon}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m16 3 4 4-4 4" />
      <path d="M20 7H4" />
      <path d="m8 21-4-4 4-4" />
      <path d="M4 17h16" />
    </svg>
  )
}

/**
 * Credencial colgada de una cinta, con dos caras. El botón de las flechas le da la vuelta.
 * El botón está fuera de la tarjeta que gira, así no se da la vuelta con ella.
 */
export function ProfileBadge() {
  const { dictionary } = useTranslation()
  const [isFlipped, setIsFlipped] = useState(false)
  const cardClassName = joinClassNames(styles.card, isFlipped && styles.flipped)

  return (
    <div className={styles.badge}>
      <div className={styles.lanyard} aria-hidden="true">
        <span className={styles.clip} />
      </div>

      <div className={styles.hanger}>
        <div className={cardClassName}>
          <BadgeFront isHidden={isFlipped} />
          <BadgeBack isHidden={!isFlipped} />
        </div>

        <button
          type="button"
          className={styles.flipButton}
          aria-pressed={isFlipped}
          onClick={() => setIsFlipped(invertFlipped)}
        >
          <FlipIcon />
          <span className="visually-hidden">{dictionary.about.badge.flipButton}</span>
        </button>
      </div>
    </div>
  )
}
