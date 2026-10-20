import { SECTION_IDS } from '@/shared/config/sections'
import { LOGO_SUFFIX, SITE_OWNER_NAME } from '@/shared/config/site'
import { useTranslation } from '@/shared/i18n'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import { NAVIGATION_LINKS, type NavigationLinkData } from '../../data/navigationLinks'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher'
import { MenuButton } from './MenuButton'
import { NavigationLink } from './NavigationLink'
import styles from './Navbar.module.scss'

const NAVIGATION_LIST_ID = 'navigation-links'

function renderNavigationLink(link: NavigationLinkData) {
  return <NavigationLink key={link.sectionId} link={link} />
}

/**
 * Barra superior fija. En escritorio los enlaces se ven en línea; en móvil
 * la misma lista se convierte en un desplegable que abre el botón ☰.
 * El orden del DOM (logo, idioma, botón, enlaces) es el orden del foco.
 */
export function Navbar() {
  const { dictionary } = useTranslation()
  const { isOpen, toggleButtonRef, toggleMenu, handleKeyDown, handleLinksClick } = useMobileMenu()
  const linksClassName = joinClassNames(styles.links, isOpen && styles.open)
  const homeHref = `#${SECTION_IDS.hero}`
  const navigationLinks = NAVIGATION_LINKS.map(renderNavigationLink)

  return (
    <header className={styles.navbar} onKeyDown={handleKeyDown}>
      <a href={homeHref} className={styles.logo}>
        {SITE_OWNER_NAME}
        <span className={styles.logoSuffix}>{LOGO_SUFFIX}</span>
      </a>

      <LocaleSwitcher />

      <nav aria-label={dictionary.navigation.label}>
        <MenuButton
          ref={toggleButtonRef}
          isOpen={isOpen}
          controlsId={NAVIGATION_LIST_ID}
          onToggle={toggleMenu}
        />
        <ul id={NAVIGATION_LIST_ID} className={linksClassName} onClick={handleLinksClick}>
          {navigationLinks}
        </ul>
      </nav>
    </header>
  )
}
