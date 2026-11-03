import { useEffect, useState, type ReactNode } from 'react'
import { readDocumentTheme, saveTheme, setDocumentTheme } from './documentTheme'
import { ThemeContext, type ThemeContextValue } from './ThemeContext'
import { oppositeTheme, type Theme } from './themes'

interface ThemeProviderProps {
  children: ReactNode
}

/** Efectos de cambiar de tema fuera de React: pintarlo en <html> y recordarlo. */
function syncThemeOutsideReact(theme: Theme): void {
  setDocumentTheme(theme)
  saveTheme(theme)
}

/** Guarda el tema activo y lo comparte con los componentes que usan useTheme. */
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Se pasa la función (sin llamarla): React solo la ejecuta en el primer render.
  const [theme, setTheme] = useState<Theme>(readDocumentTheme)

  useEffect(() => syncThemeOutsideReact(theme), [theme])

  const contextValue: ThemeContextValue = {
    theme,
    toggleTheme: () => setTheme(oppositeTheme),
  }

  return <ThemeContext value={contextValue}>{children}</ThemeContext>
}
