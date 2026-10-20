import { useContext } from 'react'
import { LocaleContext, type LocaleContextValue } from './LocaleContext'

/** Idioma activo, sus textos y la función para cambiarlo. Solo funciona dentro de LocaleProvider. */
export function useTranslation(): LocaleContextValue {
  const contextValue = useContext(LocaleContext)

  // Después de este `if`, TypeScript sabe que contextValue ya no es null (narrowing).
  if (contextValue === null) {
    throw new Error('useTranslation debe usarse dentro de LocaleProvider')
  }

  return contextValue
}
