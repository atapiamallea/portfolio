import {
  Button,
  ChipList,
  GlassPanel,
  Highlight,
  Section,
  SectionHeader,
  SectionLabel,
  Tag,
} from '@/shared/ui'
import styles from './App.module.scss'

// Escaparate temporal del sistema de diseño (Fase 1). Se sustituye por las secciones reales.
export function App() {
  return (
    <main style={{ display: 'grid', gap: '2rem', padding: '3rem 2rem' }}>
      <SectionLabel>Disponible para trabajar</SectionLabel>

      <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
        Hola, soy <Highlight>X</Highlight>
      </h1>
      <h2 style={{ fontSize: '3rem' }}>
        De cero a <Highlight accent="pink">full stack</Highlight>
      </h2>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button href="#proyectos">Ver proyectos ↓</Button>
        <Button href="#contacto" variant="secondary">
          Hablemos
        </Button>
        <Button onClick={() => console.log('click')}>Soy un &lt;button&gt;</Button>
      </div>

      <div style={{ background: 'var(--color-ink)', padding: '2rem' }}>
        <Button href="mailto:hola@ejemplo.com" variant="inverted" size="lg">
          hola@ejemplo.com ↗
        </Button>
      </div>

      <div
        style={{ display: 'grid', gap: '2rem', padding: '2rem', background: 'var(--color-pink)' }}
      >
        <GlassPanel element="article" className={styles.projectCard}>
          <Tag accent="blue" className={styles.projectCardTag}>
            Grupal
          </Tag>
          <h3>Proyecto Uno</h3>
          <p>Descripción corta del proyecto.</p>
          <ChipList label="Tecnologías usadas" items={['React', 'Node', 'MongoDB']} />
        </GlassPanel>

        <GlassPanel padding="lg">
          <SectionLabel accent="ink">01 — Sobre mí</SectionLabel>
          <h2>Panel grande</h2>
        </GlassPanel>
      </div>

      <Section id="proyectos" titleId="proyectos-title" accent="pink">
        <SectionHeader
          label="02 — Proyectos"
          titleId="proyectos-title"
          title={
            <>
              Trabajos <Highlight>seleccionados</Highlight>
            </>
          }
        />
        <p>Aquí irá la cuadrícula de proyectos.</p>
      </Section>

      <Section id="skills" titleId="skills-title" accent="ink">
        <SectionHeader
          label="03 — Skills"
          labelAccent="lime"
          titleId="skills-title"
          title={
            <>
              Lo que <Highlight>sé hacer</Highlight>
            </>
          }
        />
        <p>Sección oscura: texto claro y foco lima.</p>
      </Section>
    </main>
  )
}
