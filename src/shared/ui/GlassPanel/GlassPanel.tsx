import type { ReactNode } from 'react'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import styles from './GlassPanel.module.scss'

type GlassPanelElement = 'div' | 'article' | 'section'
type GlassPanelPadding = 'md' | 'lg'

interface GlassPanelProps {
  /** Etiqueta HTML: `article` para contenido independiente (una tarjeta de proyecto), `div` si solo es decorativo. */
  element?: GlassPanelElement
  padding?: GlassPanelPadding
  className?: string
  children: ReactNode
}

/** Panel de cristal esmerilado: la base de las tarjetas de "Sobre mí" y de "Proyectos". */
export function GlassPanel({
  element = 'div',
  padding = 'md',
  className,
  children,
}: GlassPanelProps) {
  const PanelElement = element
  const panelClassName = joinClassNames(styles.panel, styles[padding], className)

  return <PanelElement className={panelClassName}>{children}</PanelElement>
}
