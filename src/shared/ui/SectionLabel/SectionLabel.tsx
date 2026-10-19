import type { ReactNode } from 'react'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import type { Accent } from '@/shared/styles/tokens'
import styles from './SectionLabel.module.scss'

interface SectionLabelProps {
  /** Color de fondo. El color del texto se elige solo para mantener el contraste. */
  accent?: Accent
  className?: string
  children: ReactNode
}

/** Rótulo en forma de píldora que va encima de un título: "Disponible para trabajar", "01 — Sobre mí"… */
export function SectionLabel({ accent = 'lime', className, children }: SectionLabelProps) {
  const labelClassName = joinClassNames(styles.label, className)

  return (
    <span className={labelClassName} data-accent={accent}>
      {children}
    </span>
  )
}
