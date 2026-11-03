import { useTranslation } from '@/shared/i18n'
import { useTheme } from '@/shared/theme'
import styles from './ThemeToggle.module.scss'

// Iconos "moon" y "sun" de Lucide (licencia ISC). Se dibujan con el color del texto.
const MOON_PATHS = <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />

const SUN_PATHS = (
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </>
)

/**
 * Alterna entre tema claro y oscuro. El nombre es fijo ("Modo oscuro") y `aria-pressed`
 * dice si está activo, como los botones de idioma. El icono muestra el tema al que se cambia.
 */
export function ThemeToggle() {
  const { dictionary } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const iconPaths = isDark ? SUN_PATHS : MOON_PATHS

  return (
    <button type="button" aria-pressed={isDark} className={styles.toggle} onClick={toggleTheme}>
      <svg
        viewBox="0 0 24 24"
        className={styles.icon}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        {iconPaths}
      </svg>
      <span className="visually-hidden">{dictionary.themeToggle.label}</span>
    </button>
  )
}
