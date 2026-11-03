import type { Locale } from './locales'

/** Las dos formas de una palabra según la cantidad: "1 proyecto" / "3 proyectos". */
export interface PluralForms {
  one: string
  other: string
}

/**
 * Elige la forma correcta para `count` en el idioma indicado.
 * `Intl.PluralRules` es del navegador: sabe qué regla aplica cada idioma
 * ('one', 'other'…), así que no hay que escribir `count === 1` a mano.
 */
export function pluralize(count: number, forms: PluralForms, locale: Locale): string {
  const pluralRule = new Intl.PluralRules(locale).select(count)
  const isSingular = pluralRule === 'one'

  return isSingular ? forms.one : forms.other
}
