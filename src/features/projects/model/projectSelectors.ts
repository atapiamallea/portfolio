/** Posición en la lista (empieza en 0) → número de dos cifras: 0 → "01". */
export function formatProjectNumber(index: number): string {
  const position = index + 1

  return String(position).padStart(2, '0')
}
