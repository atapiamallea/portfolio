import { Hero } from '@/features/hero'
import { SECTION_IDS } from '@/shared/config/sections'
import { useTranslation } from '@/shared/i18n'
import {
  Button,
  ChipList,
  GlassPanel,
  HighlightedText,
  Section,
  SectionHeader,
  Tag,
} from '@/shared/ui'
import styles from './App.module.scss'

// Página principal. El Hero ya es la sección real (Fase 4); el resto sigue siendo el
// escaparate temporal del sistema de diseño y se sustituye sección a sección en las
// Fases 6 a 9. AppLayout pone alrededor la navbar, <main> y el footer.
export function App() {
  const { dictionary } = useTranslation()
  const { about, projects, skills, contact } = dictionary
  const heroHref = `#${SECTION_IDS.hero}`

  return (
    <>
      <Hero />

      <Section id={SECTION_IDS.about} titleId="sobre-mi-title" accent="violet">
        <GlassPanel padding="lg" className={styles.aboutPanel}>
          <SectionHeader
            label={about.label}
            titleId="sobre-mi-title"
            title={<HighlightedText text={about.title} accent="pink" />}
          />
          <p>{about.paragraphs[0]}</p>
        </GlassPanel>
      </Section>

      <Section id={SECTION_IDS.projects} titleId="proyectos-title" accent="pink">
        <SectionHeader
          label={projects.label}
          titleId="proyectos-title"
          title={<HighlightedText text={projects.title} />}
        />
        <div className={styles.projectGrid}>
          <GlassPanel element="article" className={styles.projectCard}>
            <Tag accent="violet-deep" className={styles.projectCardTag}>
              {projects.teamTag}
            </Tag>
            <div className={styles.projectThumbnail} data-accent="lime">
              01
            </div>
            <h3>Proyecto Uno</h3>
            <p>Descripción corta del proyecto.</p>
            <ChipList label={projects.technologiesLabel} items={['React', 'Node', 'MongoDB']} />
          </GlassPanel>

          <GlassPanel element="article" className={styles.projectCard}>
            <Tag className={styles.projectCardTag}>{projects.soloTag}</Tag>
            <div className={styles.projectThumbnail} data-accent="ink">
              02
            </div>
            <h3>Proyecto Final</h3>
            <p>Proyecto individual de principio a fin.</p>
            <ChipList
              label={projects.technologiesLabel}
              items={['React', 'Node', 'MongoDB', 'Deploy']}
            />
          </GlassPanel>
        </div>
      </Section>

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
