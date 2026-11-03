import { SOCIAL_LINKS, type SocialLink } from '@/shared/config/site'
import { pickLocalized, useTranslation } from '@/shared/i18n'
import { CV_PATHS } from '../../data/contact'
import { ContactNetworkLink } from './ContactNetworkLink'
import styles from './ContactLinks.module.scss'

// El correo ya tiene su propio botón grande: aquí solo van las demás redes.
function isNotEmail(link: SocialLink): boolean {
  return link.network !== 'email'
}

function renderNetworkLink(link: SocialLink) {
  return <ContactNetworkLink key={link.network} link={link} />
}

/** Fila de enlaces bajo el correo: redes y descarga del CV. */
export function ContactLinks() {
  const { locale, dictionary } = useTranslation()
  const contactTexts = dictionary.contact
  const cvPath = pickLocalized(CV_PATHS, locale)
  const networkLinks = SOCIAL_LINKS.filter(isNotEmail).map(renderNetworkLink)

  return (
    <ul aria-label={contactTexts.linksLabel} className={styles.list}>
      {networkLinks}
      <li>
        <a href={cvPath} download className={styles.link}>
          <span aria-hidden="true" className={styles.downloadIcon}>
            ↓
          </span>
          {contactTexts.cv}
          <span className="visually-hidden">, {contactTexts.cvNotice}</span>
        </a>
      </li>
    </ul>
  )
}
