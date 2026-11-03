/** Temas del portfolio. El valor es el que se escribe en `<html data-theme>`. */
export const SUPPORTED_THEMES = ['light', 'dark'] as const

/** `'light' | 'dark'`: se deriva del array, como `Locale`. */
export type Theme = (typeof SUPPORTED_THEMES)[number]

export const DEFAULT_THEME: Theme = 'light'

// Vista del array como `string[]` para poder buscar en él cualquier texto.
const supportedThemeValues: readonly string[] = SUPPORTED_THEMES

/** Type guard: valida un valor que viene de fuera (localStorage, el atributo del HTML). */
export function isTheme(value: unknown): value is Theme {
  const isText = typeof value === 'string'

  return isText && supportedThemeValues.includes(value)
}

/** El tema contrario: lo usa el botón para alternar. */
export function oppositeTheme(theme: Theme): Theme {
  return theme === 'dark' ? 'light' : 'dark'
}
