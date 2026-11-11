import { buildSectionHref, SECTION_IDS } from '@/shared/config/sections'
import { LOGO_SUFFIX, SITE_OWNER_NAME } from '@/shared/config/site'
import { useTranslation } from '@/shared/i18n'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import { NAVIGATION_LINKS, type NavigationLinkData } from '../../data/navigationLinks'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { MenuButton } from './MenuButton'
import { NavigationLink } from './NavigationLink'
import styles from './Navbar.module.scss'

const NAVIGATION_LIST_ID = 'navigation-links'
const LOGO_ICON_PATH = '/favicon.svg'
const LOGO_NAME = `${SITE_OWNER_NAME}${LOGO_SUFFIX}`

function renderNavigationLink(link: NavigationLinkData) {
  return <NavigationLink key={link.sectionId} link={link} />
}

/**
 * Barra superior fija. En escritorio los enlaces se ven en línea; en móvil
 * la misma lista se convierte en un desplegable que abre el botón ☰.
 * El orden del DOM (logo, tema, idioma, botón, enlaces) es el orden del foco.
 */
export function Navbar() {
  const { dictionary } = useTranslation()
  const { isOpen, toggleButtonRef, toggleMenu, handleKeyDown, handleLinksClick } = useMobileMenu()
  const linksClassName = joinClassNames(styles.links, isOpen && styles.open)
  const homeHref = buildSectionHref(SECTION_IDS.hero)
  const navigationLinks = NAVIGATION_LINKS.map(renderNavigationLink)

  return (
    <header className={styles.navbar} onKeyDown={handleKeyDown}>
      {/* En móvil solo se ve el icono: aria-label mantiene el nombre del enlace en todos los tamaños. */}
      <a href={homeHref} className={styles.logo} aria-label={LOGO_NAME}>
        <img src={LOGO_ICON_PATH} alt="" className={styles.logoIcon} />
        <span className={styles.logoText}>
          {SITE_OWNER_NAME}
          <span className={styles.logoSuffix}>{LOGO_SUFFIX}</span>
        </span>
      </a>

      <ThemeToggle />
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
