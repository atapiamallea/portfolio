import { useContext } from 'react'
import { ThemeContext, type ThemeContextValue } from './ThemeContext'

/** Tema activo y la función para alternarlo. Solo funciona dentro de ThemeProvider. */
export function useTheme(): ThemeContextValue {
  const contextValue = useContext(ThemeContext)

  if (contextValue === null) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider')
  }

  return contextValue
}
