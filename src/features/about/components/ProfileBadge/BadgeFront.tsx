import { SITE_OWNER_NAME, SOCIAL_LINKS, type SocialLink } from '@/shared/config/site'
import { pickLocalized, useTranslation } from '@/shared/i18n'
import { PROFILE } from '../../data/profile'
import { BadgeSocialLink } from './BadgeSocialLink'
import styles from './ProfileBadge.module.scss'

const OWNER_INITIAL = SITE_OWNER_NAME.charAt(0)

interface BadgeFaceProps {
  /** La cara que no se ve lleva `inert`: ni Tab ni el lector de pantalla llegan a ella. */
  isHidden: boolean
}

function renderSocialLink(link: SocialLink) {
  return <BadgeSocialLink key={link.network} link={link} />
}

/** Cara delantera: foto (o inicial), etiqueta con nombre y rol, y redes. */
export function BadgeFront({ isHidden }: BadgeFaceProps) {
  const { locale, dictionary } = useTranslation()
  const badgeTexts = dictionary.about.badge
  const photo = PROFILE.photo
  const photoAlt = photo === undefined ? '' : pickLocalized(photo.alt, locale)
  const socialLinks = SOCIAL_LINKS.map(renderSocialLink)

  return (
    <div className={styles.face} inert={isHidden}>
      <div className={styles.photo} data-accent="pink">
        {photo === undefined ? (
          <span className={styles.initial} aria-hidden="true">
            {OWNER_INITIAL}
          </span>
        ) : (
          <img src={photo.src} alt={photoAlt} className={styles.photoImage} />
        )}
      </div>

      <p className={styles.nameLabel}>
        <span className={styles.name}>{SITE_OWNER_NAME}</span>
        <span className={styles.role}>{badgeTexts.role}</span>
      </p>

      <ul aria-label={badgeTexts.socialLabel} className={styles.socialList}>
        {socialLinks}
      </ul>
    </div>
  )
}
