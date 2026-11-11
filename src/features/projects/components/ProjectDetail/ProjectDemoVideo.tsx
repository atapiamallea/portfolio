import { useId, useRef } from 'react'
import { pickLocalized, useTranslation } from '@/shared/i18n'
import type { ProjectDemoVideo as ProjectDemoVideoData } from '../../model/project'
import { DemoChapters } from './DemoChapters'
import styles from './ProjectDetail.module.scss'

interface ProjectDemoVideoProps {
  video: ProjectDemoVideoData
  projectTitle: string
}

/**
 * Vídeo de la demo con los controles del navegador y, si los hay, sus capítulos.
 * Sin autoplay: no se mueve nada que la persona no haya pedido y solo se descarga
 * al darle a play (`preload="metadata"`).
 */
export function ProjectDemoVideo({ video, projectTitle }: ProjectDemoVideoProps) {
  const { locale, dictionary } = useTranslation()
  const detailTexts = dictionary.projects.detail
  const videoRef = useRef<HTMLVideoElement>(null)
  const summaryId = useId()
  const summary = pickLocalized(video.summary, locale)
  const videoLabel = `${detailTexts.demoTitle} — ${projectTitle}`
  const chapters = video.chapters ?? []
  const hasChapters = chapters.length > 0

  return (
    <div className={styles.demo}>
      <figure className={styles.figure}>
        <video
          ref={videoRef}
          className={styles.video}
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          aria-label={videoLabel}
          aria-describedby={summaryId}
        >
          <source src={video.src} type="video/mp4" />
          {detailTexts.videoFallback}
        </video>
        <figcaption id={summaryId} className={styles.caption}>
          {summary}
        </figcaption>
      </figure>
      {hasChapters && <DemoChapters chapters={chapters} videoRef={videoRef} />}
    </div>
  )
}
