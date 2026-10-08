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

/** Etiqueta en forma de píldora: "Disponible para trabajar", "01 — Sobre mí"… */
export function Tag({ accent = 'lime', className, children }: TagProps) {
  return (
    <span className={joinClassNames(styles.tag, className)} data-accent={accent}>
      {children}
    </span>
  )
}
