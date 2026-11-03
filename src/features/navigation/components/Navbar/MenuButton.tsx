import type { Ref } from 'react'
import { useTranslation } from '@/shared/i18n'
import styles from './Navbar.module.scss'

interface MenuButtonProps {
  isOpen: boolean
  /** Id de la lista que abre y cierra (aria-controls). */
  controlsId: string
  onToggle: () => void
  /** En React 19, `ref` es una prop más: ya no hace falta forwardRef. */
  ref: Ref<HTMLButtonElement>
}

/**
 * Botón ☰ del menú móvil. Su nombre es siempre "Menú": el lector de pantalla
 * anuncia si está abierto o cerrado gracias a aria-expanded.
 */
export function MenuButton({ isOpen, controlsId, onToggle, ref }: MenuButtonProps) {
  const { dictionary } = useTranslation()

  return (
    <button
      ref={ref}
      type="button"
      className={styles.menuButton}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      onClick={onToggle}
    >
      <span className="visually-hidden">{dictionary.navigation.menuButton}</span>
      <span className={styles.menuIcon} aria-hidden="true" />
    </button>
  )
}
