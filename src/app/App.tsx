import { AboutSection } from '@/features/about'
import { Hero } from '@/features/hero'
import { ProjectsSection } from '@/features/projects'
import { TechMarquee } from '@/features/skills'
import { SECTION_IDS } from '@/shared/config/sections'
import { useTranslation } from '@/shared/i18n'
import { Button, HighlightedText, Section, SectionHeader } from '@/shared/ui'
import styles from './App.module.scss'

// Página principal. Hero, cinta, Sobre mí y Proyectos ya son las secciones reales
// (Fases 4 a 7); Skills y Contacto siguen siendo el escaparate temporal y se sustituyen
// en las Fases 8 y 9. AppLayout pone alrededor la navbar, <main> y el footer.
export function App() {
  const { dictionary } = useTranslation()
  const { skills, contact } = dictionary
  const heroHref = `#${SECTION_IDS.hero}`

  return (
    <>
      <Hero />
      <TechMarquee />
      <AboutSection />
      <ProjectsSection />

      <Section id={SECTION_IDS.skills} titleId="skills-title" accent="ink">
        <SectionHeader
          label={skills.label}
          labelAccent="lime"
          titleId="skills-title"
          title={<HighlightedText text={skills.title} />}
        />
        <p>
          Sección oscura: texto claro y anillo de foco lima. Llega con Tab a{' '}
          <a href={heroHref} className={styles.textLink}>
            este enlace
          </a>{' '}
          para verlo.
        </p>
      </Section>

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
