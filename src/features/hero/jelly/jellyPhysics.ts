// Física de la red gelatina. Funciones puras: reciben datos y devuelven datos nuevos,
// sin tocar el DOM ni modificar lo que reciben. Por eso se pueden probar sin navegador.
import {
  DAMPING,
  DRAG_FORCE,
  MAX_VISIBLE_STRETCH,
  POINT_SPACING,
  POINTER_RADIUS,
  POINTER_VELOCITY_DECAY,
  PUSH_FORCE,
  REST_VELOCITY,
  SPRING_STIFFNESS,
} from './jellySettings'

/** Un punto de la red: dónde debería estar (origin), dónde está y a qué velocidad va. */
export interface JellyPoint {
  readonly originX: number
  readonly originY: number
  readonly x: number
  readonly y: number
  readonly velocityX: number
  readonly velocityY: number
}

/** La red completa. Los puntos están fila a fila: el vecino de abajo está `columns` posiciones más allá. */
export interface JellyGrid {
  readonly points: readonly JellyPoint[]
  readonly columns: number
}

/** El cursor. `isActive` es false cuando está fuera de la red. */
export interface JellyPointer {
  readonly isActive: boolean
  readonly x: number
  readonly y: number
  readonly velocityX: number
  readonly velocityY: number
}

interface Force {
  readonly x: number
  readonly y: number
}

export const INACTIVE_POINTER: JellyPointer = {
  isActive: false,
  x: 0,
  y: 0,
  velocityX: 0,
  velocityY: 0,
}

const NO_FORCE: Force = { x: 0, y: 0 }

// La red sobresale medio hueco por cada lado para que no se vean los bordes al empujarla.
function createPointAtIndex(index: number, columns: number): JellyPoint {
  const column = index % columns
  const row = Math.floor(index / columns)
  const originX = column * POINT_SPACING - POINT_SPACING / 2
  const originY = row * POINT_SPACING - POINT_SPACING / 2

  return { originX, originY, x: originX, y: originY, velocityX: 0, velocityY: 0 }
}

/** Crea una red en reposo que cubre un área de `width` × `height` píxeles. */
export function createJellyGrid(width: number, height: number): JellyGrid {
  const columns = Math.ceil(width / POINT_SPACING) + 2
  const rows = Math.ceil(height / POINT_SPACING) + 2
  const pointCount = columns * rows
  const points: JellyPoint[] = []

  for (let index = 0; index < pointCount; index++) {
    points.push(createPointAtIndex(index, columns))
  }

  return { points, columns }
}

/**
 * Empujón del cursor sobre un punto: lo aleja del cursor y lo arrastra un poco
 * en la dirección en la que se mueve. Cuanto más cerca, más fuerte.
 */
function computePointerForce(point: JellyPoint, pointer: JellyPointer): Force {
  const offsetX = point.x - pointer.x
  const offsetY = point.y - pointer.y
  const distance = Math.hypot(offsetX, offsetY)
  const isOutOfReach = !pointer.isActive || distance >= POINTER_RADIUS

  if (isOutOfReach) {
    return NO_FORCE
  }

  // Si el cursor está justo encima del punto, se evita dividir entre 0.
  const safeDistance = distance || 1
  const falloff = (1 - distance / POINTER_RADIUS) ** 2
  const pushX = (offsetX / safeDistance) * falloff * PUSH_FORCE
  const pushY = (offsetY / safeDistance) * falloff * PUSH_FORCE
  const dragX = pointer.velocityX * falloff * DRAG_FORCE
  const dragY = pointer.velocityY * falloff * DRAG_FORCE

  return { x: pushX + dragX, y: pushY + dragY }
}

/** Calcula dónde estará un punto en el siguiente frame. Devuelve un punto nuevo. */
export function stepPoint(point: JellyPoint, pointer: JellyPointer): JellyPoint {
  const pointerForce = computePointerForce(point, pointer)
  const springForceX = (point.originX - point.x) * SPRING_STIFFNESS
  const springForceY = (point.originY - point.y) * SPRING_STIFFNESS
  const velocityX = (point.velocityX + pointerForce.x + springForceX) * DAMPING
  const velocityY = (point.velocityY + pointerForce.y + springForceY) * DAMPING

  return { ...point, x: point.x + velocityX, y: point.y + velocityY, velocityX, velocityY }
}

/** Avanza toda la red un frame. */
export function stepJellyGrid(grid: JellyGrid, pointer: JellyPointer): JellyGrid {
  const nextPoints: JellyPoint[] = []

  for (const point of grid.points) {
    nextPoints.push(stepPoint(point, pointer))
  }

  return { ...grid, points: nextPoints }
}

/** El cursor se ha movido a (x, y): su velocidad es lo que ha recorrido desde la última vez. */
export function movePointer(pointer: JellyPointer, x: number, y: number): JellyPointer {
  // Al entrar en la red no hay posición anterior: empieza sin velocidad para no dar un tirón.
  const velocityX = pointer.isActive ? x - pointer.x : 0
  const velocityY = pointer.isActive ? y - pointer.y : 0

  return { isActive: true, x, y, velocityX, velocityY }
}

/** La velocidad del cursor se apaga poco a poco cuando deja de moverse. */
export function decayPointer(pointer: JellyPointer): JellyPointer {
  const velocityX = pointer.velocityX * POINTER_VELOCITY_DECAY
  const velocityY = pointer.velocityY * POINTER_VELOCITY_DECAY

  return { ...pointer, velocityX, velocityY }
}

function isPointAtRest(point: JellyPoint): boolean {
  const speed = Math.hypot(point.velocityX, point.velocityY)

  return speed < REST_VELOCITY
}

/** True si ningún punto se mueve: la animación ya puede pararse. */
export function isGridAtRest(grid: JellyGrid): boolean {
  return grid.points.every(isPointAtRest)
}

/** De 0 (en su sitio) a 1 (muy desplazado). Decide el color y el tamaño del nodo. */
export function measureStretch(point: JellyPoint): number {
  const displacement = Math.hypot(point.x - point.originX, point.y - point.originY)

  return Math.min(displacement / MAX_VISIBLE_STRETCH, 1)
}
