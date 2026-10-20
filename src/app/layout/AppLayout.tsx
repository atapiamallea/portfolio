import type { ReactNode } from 'react'
import { Navbar, SkipLink } from '@/features/navigation'
import { MAIN_CONTENT_ID } from '@/shared/config/sections'
import { Footer } from './Footer'
import styles from './AppLayout.module.scss'

interface AppLayoutProps {
  children: ReactNode
}

/**
 * Estructura común de la página: skip-link, navbar, contenido y footer.
 * `tabIndex={-1}` deja que el skip-link mueva el foco a <main> también en Safari.
 */
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id={MAIN_CONTENT_ID} tabIndex={-1} className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}
