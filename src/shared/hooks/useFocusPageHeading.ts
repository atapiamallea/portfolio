import { useEffect } from 'react'

/**
 * Al entrar en una página nueva: arriba del todo y el foco en su título.
 * Así el lector de pantalla anuncia la página y el siguiente Tab sigue desde ahí.
 * 'instant': el scroll suave de global.scss haría que la página nueva se viera deslizarse.
 */
function focusPageHeading(headingId: string): void {
  const heading = document.getElementById(headingId)

  window.scrollTo({ top: 0, behavior: 'instant' })
  heading?.focus({ preventScroll: true })
}

/**
 * Lleva el foco al título de la página (que necesita `tabIndex={-1}`) cada vez que
 * cambia `pageKey`, p. ej. el id del proyecto. En una SPA el navegador no lo hace solo.
 */
export function useFocusPageHeading(headingId: string, pageKey: string): void {
  useEffect(() => focusPageHeading(headingId), [headingId, pageKey])
}
