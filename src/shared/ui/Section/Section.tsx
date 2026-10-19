import type { ReactNode } from 'react'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import type { Accent } from '@/shared/styles/tokens'
import styles from './Section.module.scss'

interface SectionProps {
  /** Ancla para la navegación: `<Section id="proyectos">` es el destino de `href="#proyectos"`. */
  id: string
  /** Id del título que nombra la sección (el `titleId` de su SectionHeader). */
  titleId: string
  /** Color de fondo. `ink` convierte la sección en una superficie oscura. */
  accent: Accent
  showGrid?: boolean
  className?: string
  children: ReactNode
}

/** Bloque de página a todo el ancho: fondo de color, cuadrícula opcional y contenido centrado. */
export function Section({
  id,
  titleId,
  accent,
  showGrid = true,
  className,
  children,
}: SectionProps) {
  const sectionClassName = joinClassNames(styles.section, showGrid && styles.grid, className)

  return (
    <section id={id} aria-labelledby={titleId} className={sectionClassName} data-accent={accent}>
      <div className={styles.content}>{children}</div>
    </section>
  )
}
