import type { Locale } from '../locales'
import { en } from './en'
import { es, type Dictionary } from './es'

/** Un diccionario por idioma. Si se añade un idioma a `Locale` y falta aquí, no compila. */
export const DICTIONARIES: Record<Locale, Dictionary> = { es, en }

export type { Dictionary }
