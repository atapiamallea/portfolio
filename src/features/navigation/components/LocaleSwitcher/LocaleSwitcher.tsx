import { SUPPORTED_LOCALES, useTranslation, type Locale } from '@/shared/i18n'
import { LocaleOption } from './LocaleOption'
import styles from './LocaleSwitcher.module.scss'

function renderLocaleOption(locale: Locale) {
  return <LocaleOption key={locale} locale={locale} />
}

/** Selector de idioma: un botón por idioma, agrupados con un nombre ("Idioma"). */
export function LocaleSwitcher() {
  const { dictionary } = useTranslation()
  const localeOptions = SUPPORTED_LOCALES.map(renderLocaleOption)

  return (
    <div role="group" aria-label={dictionary.localeSwitcher.groupLabel} className={styles.switcher}>
      {localeOptions}
    </div>
  )
}
