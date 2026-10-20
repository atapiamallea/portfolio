import type { Accent } from '@/shared/styles/tokens'
import { Highlight } from '../Highlight/Highlight'

/** Un texto partido en tres trozos: lo que va antes, la parte resaltada y lo que va después. */
export interface HighlightedTextParts {
  start: string
  highlight: string
  end: string
}

interface HighlightedTextProps {
  text: HighlightedTextParts
  /** Color del resaltado. */
  accent?: Accent
}

/**
 * Pinta un texto con una parte resaltada: "De cero a [full stack] en un bootcamp."
 * No añade ninguna etiqueta propia: va dentro de un título (`<h1>`, `<h2>`…).
 */
export function HighlightedText({ text, accent }: HighlightedTextProps) {
  return (
    <>
      {text.start}
      <Highlight accent={accent}>{text.highlight}</Highlight>
      {text.end}
    </>
  )
}
