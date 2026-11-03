import { SECTION_IDS } from '@/shared/config/sections'
import { useTranslation } from '@/shared/i18n'
import { Button, Highlight, Section, SectionLabel } from '@/shared/ui'
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
        {/* El saludo va en su propia línea y más pequeño que el nombre, que es lo que destaca. */}
        <h1 id={HERO_TITLE_ID} className={styles.title}>
          <span className={styles.greeting}>{hero.title.start}</span>
          <Highlight>{hero.title.highlight}</Highlight>
          {hero.title.end}
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
