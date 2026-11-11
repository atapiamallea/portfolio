import { pickLocalized, useTranslation, type Locale } from '@/shared/i18n'
import type { Accent } from '@/shared/styles/tokens'
import { GlassPanel, SectionLabel } from '@/shared/ui'
import type { ArchitectureNote } from '../../model/project'
import { formatProjectNumber } from '../../model/projectSelectors'
import styles from './ProjectDetail.module.scss'

// Cada nota lleva un número de un color distinto, en este orden: da color sin cargar la tarjeta.
const NOTE_ACCENTS: readonly Accent[] = ['green', 'pink', 'orange', 'blue', 'violet']

interface ArchitectureNotesProps {
  notes: readonly ArchitectureNote[]
}

interface ArchitectureNoteItem {
  number: string
  accent: Accent
  title: string
  text: string
}

/** Notas listas para pintar: número ("01"), color que le toca y textos en el idioma activo. */
function buildNoteItems(
  notes: readonly ArchitectureNote[],
  locale: Locale,
): ArchitectureNoteItem[] {
  const noteItems: ArchitectureNoteItem[] = []

  for (const [index, note] of notes.entries()) {
    const accentIndex = index % NOTE_ACCENTS.length
    // Leer de un array puede dar `undefined` para TypeScript (noUncheckedIndexedAccess),
    // aunque el módulo (%) garantiza que el índice existe.
    const accent = NOTE_ACCENTS[accentIndex] ?? 'green'

    noteItems.push({
      number: formatProjectNumber(index),
      accent,
      title: pickLocalized(note.title, locale),
      text: pickLocalized(note.text, locale),
    })
  }

  return noteItems
}

// Los títulos no se repiten dentro de un proyecto: sirven como `key`.
function renderNote(note: ArchitectureNoteItem) {
  return (
    <li key={note.title}>
      <GlassPanel className={styles.note}>
        <SectionLabel accent={note.accent}>{note.number}</SectionLabel>
        <h3 className={styles.noteTitle}>{note.title}</h3>
        <p>{note.text}</p>
      </GlassPanel>
    </li>
  )
}

/** "Cómo está construido": decisiones de arquitectura y calidad, más allá de la lista de tecnologías. */
export function ArchitectureNotes({ notes }: ArchitectureNotesProps) {
  const { locale } = useTranslation()
  const noteItems = buildNoteItems(notes, locale)
  const noteElements = noteItems.map(renderNote)

  return <ul className={styles.noteGrid}>{noteElements}</ul>
}
