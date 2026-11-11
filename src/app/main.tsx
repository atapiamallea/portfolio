import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { LocaleProvider } from '@/shared/i18n'
import '@/shared/styles/global.scss'
import { ThemeProvider } from '@/shared/theme'
import { App } from './App'
import { AppLayout } from './layout/AppLayout'

const rootElement = document.getElementById('root')
if (rootElement === null) {
  throw new Error('No se encontró el elemento #root')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LocaleProvider>
          <AppLayout>
            <App />
          </AppLayout>
        </LocaleProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
