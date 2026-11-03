import { SECTION_IDS, type SectionId } from '@/shared/config/sections'
import type { Dictionary } from '@/shared/i18n'

/** Las claves de `dictionary.navigation.links`: 'about' | 'projects' | 'skills' | 'contact'. */
export type NavigationLinkKey = keyof Dictionary['navigation']['links']

export interface NavigationLinkData {
  sectionId: SectionId
  labelKey: NavigationLinkKey
  /** El último enlace se pinta como botón destacado. */
  isCallToAction: boolean
}

// Para añadir un enlace: una línea aquí y su texto en los diccionarios.
export const NAVIGATION_LINKS: readonly NavigationLinkData[] = [
  { sectionId: SECTION_IDS.about, labelKey: 'about', isCallToAction: false },
  { sectionId: SECTION_IDS.projects, labelKey: 'projects', isCallToAction: false },
  { sectionId: SECTION_IDS.skills, labelKey: 'skills', isCallToAction: false },
  { sectionId: SECTION_IDS.contact, labelKey: 'contact', isCallToAction: true },
]
