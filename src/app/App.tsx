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

function logButtonClick() {
  console.log('Button sin href: se renderiza como <button>')
}

// Escaparate temporal del sistema de diseño (Fase 1): cada componente en el sitio
// donde se usará. Se sustituye por las secciones reales a partir de la Fase 3.
export function App() {
  return (
    <main>
      <Section id="inicio" titleId="inicio-title" accent="paper">
        <div className={styles.hero}>
          <SectionLabel>Disponible para trabajar</SectionLabel>
          <h1 id="inicio-title" className={styles.heroTitle}>
            Hola, soy <Highlight>X</Highlight>
          </h1>
          <div className={styles.buttonRow}>
            <Button href="#proyectos">Ver proyectos ↓</Button>
            <Button href="#contacto" variant="secondary">
              Hablemos
            </Button>
            <Button onClick={logButtonClick}>Soy un &lt;button&gt;</Button>
          </div>
        </div>
      </Section>

      <Section id="sobre-mi" titleId="sobre-mi-title" accent="violet">
        <GlassPanel padding="lg" className={styles.aboutPanel}>
          <SectionHeader
            label="01 — Sobre mí"
            titleId="sobre-mi-title"
            title={
              <>
                De cero a <Highlight accent="pink">full stack</Highlight>
              </>
            }
          />
          <p>GlassPanel con padding grande: cristal sobre la cuadrícula violeta.</p>
        </GlassPanel>
      </Section>

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
        <div className={styles.projectGrid}>
          <GlassPanel element="article" className={styles.projectCard}>
            <Tag accent="blue" className={styles.projectCardTag}>
              Grupal
            </Tag>
            <div className={styles.projectThumbnail} data-accent="lime">
              01
            </div>
            <h3>Proyecto Uno</h3>
            <p>Descripción corta del proyecto.</p>
            <ChipList label="Tecnologías usadas" items={['React', 'Node', 'MongoDB']} />
          </GlassPanel>

          <GlassPanel element="article" className={styles.projectCard}>
            <Tag className={styles.projectCardTag}>Individual</Tag>
            <div className={styles.projectThumbnail} data-accent="ink">
              02
            </div>
            <h3>Proyecto Final</h3>
            <p>Proyecto individual de principio a fin.</p>
            <ChipList label="Tecnologías usadas" items={['React', 'Node', 'MongoDB', 'Deploy']} />
          </GlassPanel>
        </div>
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
        <p>
          Sección oscura: texto claro y anillo de foco lima. Llega con Tab a{' '}
          <a href="#inicio" className={styles.textLink}>
            este enlace
          </a>{' '}
          para verlo.
        </p>
      </Section>

      <Section id="contacto" titleId="contacto-title" accent="lime" showGrid={false}>
        <SectionHeader
          label="04 — Contacto"
          titleId="contacto-title"
          title={
            <>
              ¿Trabajamos <Highlight accent="pink">juntos</Highlight>?
            </>
          }
        />
        <div>
          <Button href="mailto:hola@ejemplo.com" variant="inverted" size="lg">
            hola@ejemplo.com ↗
          </Button>
        </div>
      </Section>
    </main>
  )
}
