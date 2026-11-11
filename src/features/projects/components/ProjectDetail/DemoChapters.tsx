import { useId, type MouseEvent, type RefObject } from 'react'
import { pickLocalized, useTranslation, type Locale } from '@/shared/i18n'
import type { DemoChapter } from '../../model/project'
import { formatTimestamp } from '../../model/projectSelectors'
import styles from './ProjectDetail.module.scss'

interface DemoChaptersProps {
  chapters: readonly DemoChapter[]
  videoRef: RefObject<HTMLVideoElement | null>
}

interface ChapterItem {
  startSeconds: number
  timestamp: string
  title: string
}

/** Capítulos listos para pintar: minuto formateado y título en el idioma activo. */
function buildChapterItems(chapters: readonly DemoChapter[], locale: Locale): ChapterItem[] {
  const chapterItems: ChapterItem[] = []

  for (const chapter of chapters) {
    chapterItems.push({
      startSeconds: chapter.startSeconds,
      timestamp: formatTimestamp(chapter.startSeconds),
      title: pickLocalized(chapter.title, locale),
    })
  }

  return chapterItems
}

// El segundo de inicio viaja en `data-start-seconds`: así un solo manejador en la lista
// sirve para todos los botones, sin crear una función por capítulo.
function renderChapter(chapter: ChapterItem) {
  return (
    <li key={chapter.startSeconds}>
      <button type="button" className={styles.chapter} data-start-seconds={chapter.startSeconds}>
        {/* El espacio separa minuto y título también para el lector de pantalla ("0:55 Carmen…"). */}
        <span className={styles.chapterTime}>{chapter.timestamp}</span> {chapter.title}
      </button>
    </li>
  )
}

/** El botón de capítulo pulsado, o `null` si el clic cayó entre botones. */
function findClickedChapterButton(event: MouseEvent): HTMLButtonElement | null {
  const clickedNode = event.target
  const isElement = clickedNode instanceof Element

  return isElement ? clickedNode.closest('button') : null
}

// play() devuelve una promesa que falla si el navegador bloquea la reproducción:
// el vídeo ya está en el minuto correcto y la persona puede darle a play.
function ignorePlaybackError(): void {}

function seekVideo(video: HTMLVideoElement, startSeconds: number): void {
  video.currentTime = startSeconds
  video.play().catch(ignorePlaybackError)
}

function seekToClickedChapter(event: MouseEvent, video: HTMLVideoElement | null): void {
  const chapterButton = findClickedChapterButton(event)
  const canSeek = chapterButton !== null && video !== null

  if (canSeek) {
    const startSeconds = Number(chapterButton.dataset.startSeconds)
    seekVideo(video, startSeconds)
  }
}

/** Lista de capítulos de la demo: cada botón salta a su minuto y reproduce el vídeo. */
export function DemoChapters({ chapters, videoRef }: DemoChaptersProps) {
  const { locale, dictionary } = useTranslation()
  const titleId = useId()
  const chapterItems = buildChapterItems(chapters, locale)
  const chapterElements = chapterItems.map(renderChapter)

  const handleChapterClick = (event: MouseEvent) => seekToClickedChapter(event, videoRef.current)

  return (
    <nav aria-labelledby={titleId} className={styles.chapters}>
      <h3 id={titleId} className={styles.chaptersTitle}>
        {dictionary.projects.detail.chaptersTitle}
      </h3>
      <ol className={styles.chapterList} onClick={handleChapterClick}>
        {chapterElements}
      </ol>
    </nav>
  )
}
