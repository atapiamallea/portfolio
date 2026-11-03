// Dibuja la red en un canvas 2D. No calcula física: solo pinta lo que recibe.
import { measureStretch, type JellyGrid, type JellyPoint } from './jellyPhysics'

/** Colores de la red, leídos de los tokens CSS para no repetir los valores hex. */
export interface JellyColors {
  readonly line: string
  readonly restingNode: string
  readonly movingNode: string
  readonly stretchedNode: string
}

const LINE_WIDTH = 1.5
const LINE_OPACITY = 0.28
const RESTING_NODE_OPACITY = 0.45
const NODE_MIN_RADIUS = 2
const NODE_EXTRA_RADIUS = 4
const MOVING_STRETCH = 0.05
const STRETCHED_STRETCH = 0.5

/**
 * Lee los colores de las variables CSS que hay en la página. Las líneas usan `--color-line`,
 * que cambia con el tema: tinta en claro y papel en oscuro.
 */
export function readJellyColors(element: Element): JellyColors {
  const computedStyle = getComputedStyle(element)
  const line = computedStyle.getPropertyValue('--color-line').trim()
  const orange = computedStyle.getPropertyValue('--color-orange').trim()
  const violet = computedStyle.getPropertyValue('--color-violet').trim()

  return { line, restingNode: line, movingNode: orange, stretchedNode: violet }
}

/** Traza una línea entre dos puntos, si el segundo existe (en los bordes no hay vecino). */
function traceSegment(
  context: CanvasRenderingContext2D,
  from: JellyPoint,
  to: JellyPoint | undefined,
) {
  if (to !== undefined) {
    context.moveTo(from.x, from.y)
    context.lineTo(to.x, to.y)
  }
}

// Cada punto se une con su vecino de la derecha y con el de abajo: así se forma la malla.
function drawLines(context: CanvasRenderingContext2D, grid: JellyGrid, colors: JellyColors) {
  const { points, columns } = grid

  context.beginPath()

  for (let index = 0; index < points.length; index++) {
    const point = points[index]
    const isLastColumn = index % columns === columns - 1
    const rightNeighbor = isLastColumn ? undefined : points[index + 1]
    const bottomNeighbor = points[index + columns]

    if (point !== undefined) {
      traceSegment(context, point, rightNeighbor)
      traceSegment(context, point, bottomNeighbor)
    }
  }

  context.lineWidth = LINE_WIDTH
  context.strokeStyle = colors.line
  context.globalAlpha = LINE_OPACITY
  context.stroke()
  context.globalAlpha = 1
}

// En reposo, tinta suave; al moverse, naranja; muy estirado, violeta.
function pickNodeColor(stretch: number, colors: JellyColors): string {
  if (stretch > STRETCHED_STRETCH) {
    return colors.stretchedNode
  }

  if (stretch > MOVING_STRETCH) {
    return colors.movingNode
  }

  return colors.restingNode
}

function drawNode(context: CanvasRenderingContext2D, point: JellyPoint, colors: JellyColors) {
  const stretch = measureStretch(point)
  const isResting = stretch <= MOVING_STRETCH
  const radius = NODE_MIN_RADIUS + stretch * NODE_EXTRA_RADIUS

  context.fillStyle = pickNodeColor(stretch, colors)
  context.globalAlpha = isResting ? RESTING_NODE_OPACITY : 1
  context.beginPath()
  context.arc(point.x, point.y, radius, 0, Math.PI * 2)
  context.fill()
}

/** Borra el canvas y pinta la red entera: primero las líneas, después los nodos encima. */
export function drawJellyGrid(
  context: CanvasRenderingContext2D,
  grid: JellyGrid,
  colors: JellyColors,
) {
  const { width, height } = context.canvas

  context.save()
  context.setTransform(1, 0, 0, 1, 0, 0)
  context.clearRect(0, 0, width, height)
  context.restore()

  drawLines(context, grid, colors)

  for (const point of grid.points) {
    drawNode(context, point, colors)
  }

  context.globalAlpha = 1
}
