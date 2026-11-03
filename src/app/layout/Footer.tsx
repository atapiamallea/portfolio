import { SITE_OWNER_NAME } from '@/shared/config/site'
import { useTranslation } from '@/shared/i18n'
import styles from './Footer.module.scss'

/** Pie de página. El año se calcula para no tener que actualizarlo a mano. */
export function Footer() {
  const { dictionary } = useTranslation()
  const currentYear = new Date().getFullYear()
  const copyright = `© ${currentYear} ${SITE_OWNER_NAME} — ${dictionary.footer.text}`

  return (
    <footer className={styles.footer}>
      <p>{copyright}</p>
    </footer>
  )
}
