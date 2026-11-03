import type { SocialLink } from '@/shared/config/site'
import { useTranslation } from '@/shared/i18n'
import { SocialIcon } from '@/shared/ui'
import styles from './ProfileBadge.module.scss'

interface BadgeSocialLinkProps {
  link: SocialLink
}

/**
 * Enlace de icono a una red. Solo se ve el icono; el lector de pantalla oye
 * "GitHub, se abre en una pestaña nueva". El correo abre la app de correo, no una pestaña.
 */
export function BadgeSocialLink({ link }: BadgeSocialLinkProps) {
  const { dictionary } = useTranslation()
  const networkName = dictionary.about.badge.networkNames[link.network]
  const opensNewTab = link.network !== 'email'
  const accessibleName = opensNewTab
    ? `${networkName}, ${dictionary.common.newTabNotice}`
    : networkName
  const target = opensNewTab ? '_blank' : undefined
  const rel = opensNewTab ? 'noopener noreferrer' : undefined

  return (
    <li>
      <a href={link.url} target={target} rel={rel} className={styles.socialLink}>
        <SocialIcon network={link.network} className={styles.socialIcon} />
        <span className="visually-hidden">{accessibleName}</span>
      </a>
    </li>
  )
}
