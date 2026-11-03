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
  readonly repositories: readonly ProjectRepository[]
}
