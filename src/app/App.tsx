import { AboutSection } from '@/features/about'
import { ContactSection } from '@/features/contact'
import { Hero } from '@/features/hero'
import { ProjectsSection } from '@/features/projects'
import { SkillsSection, TechMarquee } from '@/features/skills'

// Página principal: las secciones en orden. AppLayout pone alrededor la navbar, <main> y el footer.
export function App() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
