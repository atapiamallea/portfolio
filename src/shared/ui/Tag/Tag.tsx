import type { ReactNode } from 'react'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import type { Accent } from '@/shared/styles/tokens'
import styles from './Tag.module.scss'

interface TagProps {
  /** Color de fondo. El color del texto se elige solo para mantener el contraste. */
  accent?: Accent
  className?: string
  children: ReactNode
}

/**
 * Sello pequeño e inclinado que marca un estado: "Grupal", "Individual"…
 * No se posiciona solo: quien lo usa decide dónde va (p. ej. en la esquina de una tarjeta).
 */
export function Tag({ accent = 'lime', className, children }: TagProps) {
  const tagClassName = joinClassNames(styles.tag, className)

  return (
    <span className={tagClassName} data-accent={accent}>
      {children}
    </span>
  )
}
