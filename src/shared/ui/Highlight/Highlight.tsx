import type { ReactNode } from 'react'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import type { Accent } from '@/shared/styles/tokens'
import styles from './Highlight.module.scss'

interface HighlightProps {
  accent?: Accent
  className?: string
  children: ReactNode
}

/** Resalta una palabra dentro de un título, como un rotulador ligeramente torcido. */
export function Highlight({ accent = 'lime', className, children }: HighlightProps) {
  return (
    <span className={joinClassNames(styles.highlight, className)} data-accent={accent}>
      {children}
    </span>
  )
}
