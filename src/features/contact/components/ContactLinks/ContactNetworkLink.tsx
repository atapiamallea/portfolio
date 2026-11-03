import type { SocialLink } from '@/shared/config/site'
import { useTranslation } from '@/shared/i18n'
import { SocialIcon } from '@/shared/ui'
import styles from './ContactLinks.module.scss'

interface ContactNetworkLinkProps {
  link: SocialLink
}

/** Enlace a una red con icono y nombre visible. Se abre en una pestaña nueva y lo avisa. */
export function ContactNetworkLink({ link }: ContactNetworkLinkProps) {
  const { dictionary } = useTranslation()
  const networkName = dictionary.common.networkNames[link.network]

  return (
    <li>
      <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <SocialIcon network={link.network} className={styles.icon} />
        {networkName}
        <span className="visually-hidden">, {dictionary.common.newTabNotice}</span>
      </a>
    </li>
  )
}
