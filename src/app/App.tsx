import { SECTION_IDS } from '@/shared/config/sections'
import { useTranslation } from '@/shared/i18n'
import {
  Button,
  ChipList,
  GlassPanel,
  HighlightedText,
  Section,
  SectionHeader,
  SectionLabel,
  Tag,
} from '@/shared/ui'
import styles from './App.module.scss'

function logButtonClick() {
  console.log('Button sin href: se renderiza como <button>')
}

// Escaparate temporal del sistema de diseño: cada componente en el sitio donde se usará.
// Los textos de las secciones salen del diccionario; las notas de prueba no se traducen.
// AppLayout pone alrededor la navbar, <main> y el footer. Cada sección se sustituye
// por la real a partir de la Fase 4.
export function App() {
  const { dictionary } = useTranslation()
  const { hero, about, projects, skills, contact } = dictionary
  const contactHref = `#${SECTION_IDS.contact}`
  const projectsHref = `#${SECTION_IDS.projects}`
  const heroHref = `#${SECTION_IDS.hero}`

  return (
    <>
      <Section id={SECTION_IDS.hero} titleId="inicio-title" accent="paper">
        <div className={styles.hero}>
          <SectionLabel>{hero.availability}</SectionLabel>
          <h1 id="inicio-title" className={styles.heroTitle}>
            <HighlightedText text={hero.title} />
          </h1>
          <p className={styles.heroSubtitle}>{hero.subtitle}</p>
          <div className={styles.buttonRow}>
            <Button href={projectsHref}>{hero.primaryAction}</Button>
            <Button href={contactHref} variant="secondary">
              {hero.secondaryAction}
            </Button>
            <Button onClick={logButtonClick}>Soy un &lt;button&gt;</Button>
          </div>
        </div>
      </Section>

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
