import { SECTION_IDS } from '@/shared/config/sections'
import { useTranslation } from '@/shared/i18n'
import { Button, HighlightedText, Section, SectionLabel } from '@/shared/ui'
import { JellyGrid } from '../JellyGrid/JellyGrid'
import styles from './Hero.module.scss'

const HERO_TITLE_ID = `${SECTION_IDS.hero}-title`

/** Primera pantalla: presentación, llamadas a la acción y la red gelatina de fondo. */
export function Hero() {
  const { dictionary } = useTranslation()
  const { hero } = dictionary
  const projectsHref = `#${SECTION_IDS.projects}`
  const contactHref = `#${SECTION_IDS.contact}`

  return (
    <Section
      id={SECTION_IDS.hero}
      titleId={HERO_TITLE_ID}
      accent="paper"
      showGrid={false}
      className={styles.hero}
    >
      <JellyGrid />

      <div className={styles.content}>
        <SectionLabel>{hero.availability}</SectionLabel>
        <h1 id={HERO_TITLE_ID} className={styles.title}>
          <HighlightedText text={hero.title} />
          <span className={styles.star} aria-hidden="true">
            ✶
          </span>
        </h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        <div className={styles.actions}>
          <Button href={projectsHref}>{hero.primaryAction}</Button>
          <Button href={contactHref} variant="secondary">
            {hero.secondaryAction}
          </Button>
        </div>
      </div>
    </Section>
  )
}
