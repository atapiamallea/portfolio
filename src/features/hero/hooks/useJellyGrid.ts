import { useEffect, useRef } from 'react'
import { JellyGridAnimation } from '../jelly/JellyGridAnimation'

type StopAnimation = () => void

/** Crea y arranca la animación. Devuelve la función que la para (la limpieza del efecto). */
function startJellyGrid(canvas: HTMLCanvasElement | null): StopAnimation | undefined {
  if (canvas === null) {
    return undefined
  }

  const animation = new JellyGridAnimation(canvas)
  animation.start()

  return animation.destroy
}

/**
 * Conecta el canvas de React con la animación. React solo pone el <canvas>;
 * a partir de ahí la animación trabaja directamente con el DOM.
 */
export function useJellyGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => startJellyGrid(canvasRef.current), [])

  return canvasRef
}
