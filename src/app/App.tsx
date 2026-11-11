import { Route, Routes } from 'react-router'
import { ROUTES } from '@/shared/config/routes'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'

// Qué página se pinta en cada ruta. Cualquier ruta desconocida muestra la página principal.
export function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.projectDetail} element={<ProjectDetailPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
