import type { Localized } from '@/shared/i18n'

export interface ProfilePhoto {
  /** Ruta importada desde src/assets/about/. */
  readonly src: string
  /** Describe la foto, no repite el nombre: "Sonriendo delante de un mural de colores". */
  readonly alt: Localized<string>
}

export interface Profile {
  /** Sin foto, la credencial muestra la inicial del nombre sobre color. */
  readonly photo?: ProfilePhoto
  /** Las tecnologías que se ven en el reverso de la credencial. */
  readonly featuredTechnologies: readonly string[]
}
