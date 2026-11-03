import { SECTION_IDS } from '@/shared/config/sections'
import { useTranslation } from '@/shared/i18n'
import { GlassPanel, HighlightedText, Section, SectionHeader } from '@/shared/ui'
import { ProfileBadge } from '../ProfileBadge/ProfileBadge'
import styles from './AboutSection.module.scss'

const ABOUT_TITLE_ID = `${SECTION_IDS.about}-title`

// Los párrafos son textos fijos y distintos entre sí: sirven como `key`.
function renderParagraph(paragraph: string) {
  return (
    <p key={paragraph} className={styles.paragraph}>
      {paragraph}
    </p>
  )
}

/** Sección "Sobre mí": presentación en una tarjeta de cristal y la credencial con foto al lado. */
export function AboutSection() {
  const { dictionary } = useTranslation()
  const aboutTexts = dictionary.about
  const paragraphs = aboutTexts.paragraphs.map(renderParagraph)

  return (
    <Section id={SECTION_IDS.about} titleId={ABOUT_TITLE_ID} accent="violet">
      <div className={styles.layout}>
        <GlassPanel padding="lg" className={styles.panel}>
          <SectionHeader
            label={aboutTexts.label}
            titleId={ABOUT_TITLE_ID}
            title={<HighlightedText text={aboutTexts.title} accent="pink" />}
            className={styles.header}
          />
          {paragraphs}
        </GlassPanel>
        <ProfileBadge />
      </div>
    </Section>
  )
}
