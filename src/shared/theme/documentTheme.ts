import { DEFAULT_THEME, isTheme, type Theme } from './themes'

// Debe coincidir con la clave del script de index.html, que lee el tema antes de que cargue React.
const THEME_STORAGE_KEY = 'portfolio-theme'

/**
 * El tema que ya puso el script de index.html (guardado o el del sistema operativo).
 * React parte de ahí para no contradecir lo que ya se ve en pantalla.
 */
export function readDocumentTheme(): Theme {
  const documentTheme = document.documentElement.dataset.theme

  return isTheme(documentTheme) ? documentTheme : DEFAULT_THEME
}

/** Cambia `<html data-theme>`: los tokens CSS de cada tema cuelgan de ese atributo. */
export function setDocumentTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
}

export function saveTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Sin almacenamiento la web funciona igual; solo no recordará el tema.
  }
}
