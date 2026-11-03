// Datos de la persona dueña del sitio. No se traducen: son iguales en todos los idiomas.
export const SITE_OWNER_NAME = 'Andrea'
export const LOGO_SUFFIX = '/dev'

/** Correo de contacto: lo usan el enlace `mailto:` y el botón de copiar de Contacto. */
export const CONTACT_EMAIL = 'a.tapia.mallea@gmail.com'

/** Redes con icono en shared/ui/SocialIcon. Las claves coinciden con los diccionarios. */
export type SocialNetwork = 'github' | 'linkedin' | 'email'

export interface SocialLink {
  readonly network: SocialNetwork
  /** URL completa; para el correo, `mailto:nombre@dominio.com`. */
  readonly url: string
}

// Las usan la credencial de "Sobre mí" y Contacto. El orden de la lista
// es el orden en que se pintan los iconos.
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { network: 'github', url: 'https://github.com/atapiamallea' },
  { network: 'linkedin', url: 'https://www.linkedin.com/in/atapiam/' },
  { network: 'email', url: `mailto:${CONTACT_EMAIL}` },
]
