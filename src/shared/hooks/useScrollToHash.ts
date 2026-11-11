import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** '#proyectos' → el elemento con id "proyectos", o `null` si no hay hash o no existe. */
function findHashTarget(hash: string): HTMLElement | null {
  const targetId = decodeURIComponent(hash.slice(1))
  const hasTargetId = targetId !== ''

  return hasTargetId ? document.getElementById(targetId) : null
}

/** Scroll hasta la sección y foco en ella (la sección necesita `tabIndex={-1}`). */
function scrollToHashTarget(hash: string): void {
  const target = findHashTarget(hash)

  target?.scrollIntoView()
  target?.focus({ preventScroll: true })
}

/**
 * Al volver a la página principal desde otra ruta (p. ej. '/#proyectos'), el navegador busca
 * la sección antes de que React la pinte y no hace scroll. Este hook lo hace en cuanto existe,
 * y le da el foco para que el siguiente Tab siga desde esa sección.
 */
export function useScrollToHash(): void {
  const { hash } = useLocation()

  useEffect(() => scrollToHashTarget(hash), [hash])
}
