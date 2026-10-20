import { LOCALE_NAMES, useTranslation, type Locale } from '@/shared/i18n'
import styles from './LocaleSwitcher.module.scss'

interface LocaleOptionProps {
  locale: Locale
}

/**
 * Un botón del selector. Se ve "ES", pero el lector de pantalla lee "Español"
 * con la pronunciación correcta gracias a `lang`.
 */
export function LocaleOption({ locale }: LocaleOptionProps) {
  const { locale: activeLocale, changeLocale } = useTranslation()
  const isActive = locale === activeLocale
  const shortName = locale.toUpperCase()
  const fullName = LOCALE_NAMES[locale]

  return (
    <button
      type="button"
      lang={locale}
      aria-pressed={isActive}
      className={styles.option}
      onClick={() => changeLocale(locale)}
    >
      <span aria-hidden="true">{shortName}</span>
      <span className="visually-hidden">{fullName}</span>
    </button>
  )
}
