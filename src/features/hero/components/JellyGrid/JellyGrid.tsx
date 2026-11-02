import { useJellyGrid } from '../../hooks/useJellyGrid'
import styles from './JellyGrid.module.scss'

/** Red gelatina de fondo: reacciona al cursor. Es decoración, así que se oculta a los lectores de pantalla. */
export function JellyGrid() {
  const canvasRef = useJellyGrid()

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
}
