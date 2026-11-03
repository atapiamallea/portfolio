import { AboutSection } from '@/features/about'
import { Hero } from '@/features/hero'
import { ProjectsSection } from '@/features/projects'
import { SkillsSection, TechMarquee } from '@/features/skills'
import { SECTION_IDS } from '@/shared/config/sections'
import { useTranslation } from '@/shared/i18n'
import { Button, HighlightedText, Section, SectionHeader } from '@/shared/ui'

// Página principal. Todas las secciones son las reales salvo Contacto, que sigue siendo
// el escaparate temporal hasta la Fase 9. AppLayout pone alrededor la navbar, <main> y el footer.
export function App() {
  const { dictionary } = useTranslation()
  const { contact } = dictionary

  return (
    <>
      <Hero />
      <TechMarquee />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />

      <Section id={SECTION_IDS.contact} titleId="contacto-title" accent="paper" showGrid={false}>
        <SectionHeader
          label={contact.label}
          titleId="contacto-title"
          title={<HighlightedText text={contact.title} accent="pink" />}
        />
        <div>
          <Button href="mailto:hola@ejemplo.com" variant="inverted" size="lg">
            hola@ejemplo.com ↗
          </Button>
        </div>
      </Section>
    </>
  )
}
