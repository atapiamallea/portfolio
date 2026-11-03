import { useRef, useState, type KeyboardEvent, type MouseEvent } from 'react'

type SetMenuOpen = (isOpen: boolean) => void

function invertOpenState(isOpen: boolean): boolean {
  return !isOpen
}

/** Esc cierra el menú y devuelve el foco al botón que lo abrió. */
function closeMenuOnEscape(
  event: KeyboardEvent,
  isOpen: boolean,
  setMenuOpen: SetMenuOpen,
  toggleButton: HTMLButtonElement | null,
) {
  const shouldClose = isOpen && event.key === 'Escape'

  if (shouldClose) {
    setMenuOpen(false)
    toggleButton?.focus()
  }
}

/** `event.target` puede ser cualquier nodo: `instanceof` comprueba que es un Element. */
function isLinkClick(event: MouseEvent): boolean {
  const clickedNode = event.target
  const isElement = clickedNode instanceof Element

  return isElement && clickedNode.closest('a') !== null
}

/** Al elegir un enlace del menú, el menú se cierra. */
function closeMenuOnLinkClick(event: MouseEvent, setMenuOpen: SetMenuOpen) {
  if (isLinkClick(event)) {
    setMenuOpen(false)
  }
}

/** Estado del menú móvil: abrir y cerrar con el botón, con Esc o al pulsar un enlace. */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => setIsOpen(invertOpenState)
  const handleKeyDown = (event: KeyboardEvent) =>
    closeMenuOnEscape(event, isOpen, setIsOpen, toggleButtonRef.current)
  const handleLinksClick = (event: MouseEvent) => closeMenuOnLinkClick(event, setIsOpen)

  return { isOpen, toggleButtonRef, toggleMenu, handleKeyDown, handleLinksClick }
}
