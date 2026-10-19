import { Button, ChipList, GlassPanel, Highlight, SectionLabel, Tag } from '@/shared/ui'

// Escaparate temporal del sistema de diseño (Fase 1). Se sustituye por las secciones reales.
export function App() {
  return (
    <main style={{ display: 'grid', gap: '2rem', padding: '3rem 2rem' }}>
      <SectionLabel>Disponible para trabajar</SectionLabel>
      <SectionLabel accent="ink">01 — Sobre mí</SectionLabel>

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
        <GlassPanel element="article">
          <Tag accent="blue">Grupal</Tag>
          <h3>Proyecto Uno</h3>
          <p>Descripción corta del proyecto.</p>
          <ChipList label="Tecnologías usadas" items={['React', 'Node', 'MongoDB']} />
        </GlassPanel>

        <GlassPanel padding="lg">
          <SectionLabel accent="ink">01 — Sobre mí</SectionLabel>
          <h2>Panel grande</h2>
        </GlassPanel>
      </div>
    </main>
  )
}
