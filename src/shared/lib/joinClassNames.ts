type OptionalClassName = string | false | null | undefined

/**
 * Une nombres de clase CSS en un solo string, ignorando los valores vacíos.
 * Permite añadir clases de forma condicional sin concatenar a mano.
 *
 * @example joinClassNames('button', isActive && 'active', className) // "button active"
 */
export function joinClassNames(...classNames: OptionalClassName[]): string {
  return classNames.filter(Boolean).join(' ')
}
