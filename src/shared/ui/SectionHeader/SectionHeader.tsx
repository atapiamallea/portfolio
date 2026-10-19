import type { ReactNode } from 'react'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import type { Accent } from '@/shared/styles/tokens'
import { SectionLabel } from '../SectionLabel/SectionLabel'
import styles from './SectionHeader.module.scss'

interface SectionHeaderProps {
  /** Texto del rótulo superior, p. ej. "02 — Proyectos". */
  label: string
  /** Sobre fondo oscuro conviene `lime`: un rótulo `ink` se perdería. */
  labelAccent?: Accent
  /** Puede incluir un Highlight: `<>Lo que <Highlight>sé hacer</Highlight></>`. */
  title: ReactNode
  /** Id del `<h2>`. La Section lo usa en `aria-labelledby` para tener nombre accesible. */
  titleId: string
  className?: string
}

/** Cabecera de sección: rótulo numerado y título grande. */
export function SectionHeader({
  label,
  labelAccent = 'ink',
  title,
  titleId,
  className,
}: SectionHeaderProps) {
  const headerClassName = joinClassNames(styles.header, className)

  return (
    <header className={headerClassName}>
      <SectionLabel accent={labelAccent}>{label}</SectionLabel>
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
    </header>
  )
}
