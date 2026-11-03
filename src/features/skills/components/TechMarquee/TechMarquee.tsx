import { useState, type CSSProperties } from 'react'
import { useTranslation } from '@/shared/i18n'
import { SKILL_CATEGORIES } from '../../data/skills'
import { selectMarqueeTechnologies } from '../../model/skillSelectors'
import styles from './TechMarquee.module.scss'

// Se calcula una vez al cargar el módulo: los datos no cambian mientras la página está abierta.
const MARQUEE_TECHNOLOGIES = selectMarqueeTechnologies(SKILL_CATEGORIES)

// La duración crece con el número de tecnologías: así la velocidad es la misma
// aunque la lista se alargue. React no conoce las variables CSS (`--algo`) en `style`,
// por eso hace falta `as CSSProperties`.
const SECONDS_PER_TECHNOLOGY = 2.5
const marqueeDuration = MARQUEE_TECHNOLOGIES.length * SECONDS_PER_TECHNOLOGY
const TRACK_STYLE = { '--marquee-duration': `${marqueeDuration}s` } as CSSProperties

// ︎ pide la versión de texto del símbolo, para que iOS no lo pinte como emoji.
const PLAY_ICON = '▶︎'
const PAUSE_ICON = '❚❚'

function invertPaused(isPaused: boolean): boolean {
  return !isPaused
}

function renderTechnology(technology: string) {
  return (
    <li key={technology} className={styles.item}>
      {technology}
      <span className={styles.separator} aria-hidden="true">
        ✶
      </span>
    </li>
  )
}

/**
 * Cinta de tecnologías que se desplaza en bucle. La lista se pinta dos veces para que
 * el bucle no tenga saltos: la primera la lee el lector de pantalla y la segunda no.
 * Se pausa con el botón (WCAG 2.2.2), al pasar el ratón y con movimiento reducido.
 */
export function TechMarquee() {
  const { dictionary } = useTranslation()
  const [isPaused, setIsPaused] = useState(false)
  const technologyItems = MARQUEE_TECHNOLOGIES.map(renderTechnology)
  const buttonIcon = isPaused ? PLAY_ICON : PAUSE_ICON

  return (
    <div className={styles.marquee} data-paused={isPaused}>
      <div className={styles.viewport}>
        <div className={styles.track} style={TRACK_STYLE}>
          <ul aria-label={dictionary.marquee.label} className={styles.list}>
            {technologyItems}
          </ul>
          <ul aria-hidden="true" className={styles.list}>
            {technologyItems}
          </ul>
        </div>
      </div>

      <button
        type="button"
        className={styles.pauseButton}
        aria-pressed={isPaused}
        onClick={() => setIsPaused(invertPaused)}
      >
        <span aria-hidden="true">{buttonIcon}</span>
        <span className="visually-hidden">{dictionary.marquee.pause}</span>
      </button>
    </div>
  )
}
