import { createContext } from 'react'
import type { Theme } from './themes'

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

// `null` = "no hay ThemeProvider por encima". useTheme lo convierte en un error claro.
export const ThemeContext = createContext<ThemeContextValue | null>(null)
