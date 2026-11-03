import type { Profile } from '../model/profile'

// Para poner la foto:
//   1. Guárdala en src/assets/about/ (vertical, unos 800 px de alto, .webp o .jpg).
//   2. Impórtala aquí: import profilePhoto from '@/assets/about/andrea.webp'
//   3. Añade: photo: { src: profilePhoto, alt: { es: '…', en: '…' } },
export const PROFILE: Profile = {
  featuredTechnologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
}
