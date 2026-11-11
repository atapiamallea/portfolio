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
  /** Continúa la sección anterior: sin línea de separación arriba, para que se lean como una sola. */
  isContinuation?: boolean
  className?: string
  children: ReactNode
}

/**
 * Bloque de página a todo el ancho: fondo de color, cuadrícula opcional y contenido centrado.
 * `tabIndex={-1}`: se puede enfocar por código al llegar desde un enlace '/#seccion', pero no entra en el Tab.
 */
export function Section({
  id,
  titleId,
  accent,
  showGrid = true,
  isContinuation = false,
  className,
  children,
}: SectionProps) {
  const sectionClassName = joinClassNames(
    styles.section,
    showGrid && styles.grid,
    isContinuation && styles.continuation,
    className,
  )

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      className={sectionClassName}
      data-accent={accent}
    >
      <div className={styles.content}>{children}</div>
    </section>
  )
}
