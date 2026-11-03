import profilePhoto from '@/assets/about/andrea.webp'
import type { Profile } from '../model/profile'

// La foto es vertical 4:5, igual que la caja de la credencial: 640 × 800 px en .webp.
// Para cambiarla, sustituye el archivo de src/assets/about/ y actualiza el texto `alt`.
export const PROFILE: Profile = {
  photo: {
    src: profilePhoto,
    alt: {
      es: 'Sonriendo, con el pelo largo y castaño y una camiseta negra de La Paz, Bolivia, delante de una estantería con libros',
      en: 'Smiling, with long brown hair and a black La Paz, Bolivia T-shirt, in front of a bookshelf',
    },
  },
  featuredTechnologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
}
