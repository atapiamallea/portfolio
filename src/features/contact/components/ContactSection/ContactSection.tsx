import { SECTION_IDS } from '@/shared/config/sections'
import { CONTACT_EMAIL } from '@/shared/config/site'
import { useTranslation } from '@/shared/i18n'
import { Button, HighlightedText, Section, SectionHeader } from '@/shared/ui'
import { ContactLinks } from '../ContactLinks/ContactLinks'
import { CopyEmailButton } from '../CopyEmailButton/CopyEmailButton'
import styles from './ContactSection.module.scss'

const CONTACT_TITLE_ID = `${SECTION_IDS.contact}-title`
const MAILTO_URL = `mailto:${CONTACT_EMAIL}`

/** Sección "Contacto": el correo como acción principal, un botón para copiarlo y otros enlaces. */
export function ContactSection() {
  const { dictionary } = useTranslation()
  const contactTexts = dictionary.contact

  return (
    <Section id={SECTION_IDS.contact} titleId={CONTACT_TITLE_ID} accent="paper" showGrid={false}>
      <div className={styles.content}>
        <SectionHeader
          label={contactTexts.label}
          titleId={CONTACT_TITLE_ID}
          title={<HighlightedText text={contactTexts.title} accent="pink" />}
          className={styles.header}
        />
        <p className={styles.intro}>{contactTexts.intro}</p>

        <div className={styles.emailActions}>
          <Button href={MAILTO_URL} className={styles.emailButton}>
            {CONTACT_EMAIL}
          </Button>
          <CopyEmailButton />
        </div>

        <ContactLinks />
      </div>
    </Section>
  )
}
