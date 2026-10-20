import { MAIN_CONTENT_ID } from '@/shared/config/sections'
import { useTranslation } from '@/shared/i18n'
import styles from './SkipLink.module.scss'

/** Primer elemento enfocable: permite saltar la navbar e ir directo al contenido. */
export function SkipLink() {
  const { dictionary } = useTranslation()
  const href = `#${MAIN_CONTENT_ID}`

  return (
    <a href={href} className={styles.skipLink}>
      {dictionary.navigation.skipLink}
    </a>
  )
}
