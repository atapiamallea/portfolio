import { joinClassNames } from '@/shared/lib/joinClassNames'
import styles from './ChipList.module.scss'

interface ChipListProps {
  /** Textos de las píldoras. Deben ser únicos: se usan como `key`. */
  items: string[]
  /** Nombre accesible de la lista, p. ej. "Tecnologías usadas". */
  label: string
  className?: string
}

function renderChip(item: string) {
  return (
    <li key={item} className={styles.chip}>
      {item}
    </li>
  )
}

/** Lista de píldoras pequeñas, como las tecnologías de un proyecto. */
export function ChipList({ items, label, className }: ChipListProps) {
  const listClassName = joinClassNames(styles.list, className)
  const chips = items.map(renderChip)

  return (
    <ul className={listClassName} aria-label={label}>
      {chips}
    </ul>
  )
}
