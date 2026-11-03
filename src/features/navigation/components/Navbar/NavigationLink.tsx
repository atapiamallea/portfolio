import { useTranslation } from '@/shared/i18n'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import type { NavigationLinkData } from '../../data/navigationLinks'
import styles from './Navbar.module.scss'

interface NavigationLinkProps {
  link: NavigationLinkData
}

/** Un enlace de la navbar a una sección de la página. */
export function NavigationLink({ link }: NavigationLinkProps) {
  const { dictionary } = useTranslation()
  const label = dictionary.navigation.links[link.labelKey]
  const href = `#${link.sectionId}`
  const linkClassName = joinClassNames(styles.link, link.isCallToAction && styles.callToAction)

  return (
    <li>
      <a href={href} className={linkClassName}>
        {label}
        {link.isCallToAction && <span aria-hidden="true"> ↗</span>}
      </a>
    </li>
  )
}
