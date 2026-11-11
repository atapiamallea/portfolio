import type { Localized } from '@/shared/i18n'
import type { Accent } from '@/shared/styles/tokens'

/** Hecho en equipo o en solitario. Decide la etiqueta de la tarjeta y las estadísticas. */
export type ProjectTeamType = 'team' | 'solo'

/** Qué parte del proyecto contiene un repositorio. */
export type RepositoryKind = 'frontend' | 'backend'

export interface ProjectRepository {
  readonly kind: RepositoryKind
  readonly url: string
}

export interface ProjectImage {
  /** Ruta importada desde src/assets/projects/. */
  readonly src: string
  readonly alt: Localized<string>
}

/** Una parte del vídeo de la demo: desde qué segundo empieza y qué se ve. */
export interface DemoChapter {
  readonly startSeconds: number
  readonly title: Localized<string>
}

export interface ProjectDemoVideo {
  /** Ruta del MP4 dentro de public/: '/videos/<id>-demo.mp4'. */
  readonly src: string
  /** Imagen que se ve antes de reproducir: '/videos/<id>-poster.webp'. */
  readonly poster: string
  /** Qué se ve en la demo en una frase. Junto con los capítulos, es la alternativa en texto al vídeo. */
  readonly summary: Localized<string>
  /** Partes del vídeo, en orden. Cada una es un botón que salta a su minuto. */
  readonly chapters?: readonly DemoChapter[]
}

/** Una decisión de arquitectura o de calidad: lo que no cuenta la lista de tecnologías. */
export interface ArchitectureNote {
  readonly title: Localized<string>
  readonly text: Localized<string>
}

/** Lo que solo se ve en la página de detalle. */
export interface ProjectDetailContent {
  /** Entradilla del detalle: quién usa la aplicación y para qué. No repite `description`. */
  readonly overview: Localized<string>
  /** "Mi aporte en el proyecto": lo que hice yo. Solo tiene sentido en proyectos en equipo. */
  readonly contributions?: Localized<readonly string[]>
  readonly architecture: readonly ArchitectureNote[]
}

export interface Project {
  /** Único y en kebab-case: se usa como `key` de React y en los ids del HTML. */
  readonly id: string
  /** Nombre propio: no se traduce. */
  readonly title: string
  readonly description: Localized<string>
  readonly teamType: ProjectTeamType
  readonly technologies: readonly string[]
  /** Color de la miniatura cuando no hay imagen. */
  readonly accent: Accent
  /** Captura del proyecto. Sin ella, la miniatura muestra el número del proyecto. */
  readonly image?: ProjectImage
  readonly demoUrl?: string
  /** Vídeo de la demo. Con él y con `detail`, la tarjeta enlaza a la página de detalle. */
  readonly demoVideo?: ProjectDemoVideo
  readonly detail?: ProjectDetailContent
  readonly repositories: readonly ProjectRepository[]
}
