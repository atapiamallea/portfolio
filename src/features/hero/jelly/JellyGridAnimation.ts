// Une la física y el dibujo con el navegador: eventos del puntero, tamaño del canvas,
// movimiento reducido y el bucle de requestAnimationFrame.
import {
  createJellyGrid,
  decayPointer,
  INACTIVE_POINTER,
  isGridAtRest,
  movePointer,
  stepJellyGrid,
  type JellyGrid,
  type JellyPointer,
} from './jellyPhysics'
import { drawJellyGrid, readJellyColors, type JellyColors } from './jellyRenderer'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Animación de la red gelatina sobre un canvas.
 *
 * Solo pide frames mientras algo se mueve: el bucle arranca al mover el cursor y se
 * para solo cuando todos los puntos están quietos. Sin cursor encima no gasta CPU.
 *
 * Los manejadores de eventos son propiedades flecha (`handleX = () => …`): así `this`
 * sigue siendo la instancia aunque el navegador los llame como funciones sueltas.
 */
export class JellyGridAnimation {
  private readonly canvas: HTMLCanvasElement
  private readonly context: CanvasRenderingContext2D
  private readonly colors: JellyColors
  private readonly resizeObserver: ResizeObserver
  private readonly reducedMotionQuery: MediaQueryList
  private grid: JellyGrid = createJellyGrid(0, 0)
  private pointer: JellyPointer = INACTIVE_POINTER
  private frameId: number | null = null

  constructor(canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d')

    // getContext devuelve null si el navegador no admite canvas 2D.
    if (context === null) {
      throw new Error('Este navegador no admite canvas 2D')
    }

    this.canvas = canvas
    this.context = context
    this.colors = readJellyColors(canvas)
    this.resizeObserver = new ResizeObserver(this.handleResize)
    this.reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY)
  }

  /** Empieza a escuchar. El ResizeObserver avisa nada más observar, y eso dibuja la red. */
  start() {
    this.resizeObserver.observe(this.canvas)
    this.canvas.addEventListener('pointermove', this.handlePointerMove)
    this.canvas.addEventListener('pointerleave', this.handlePointerLeave)
    this.reducedMotionQuery.addEventListener('change', this.handleReducedMotionChange)
  }

  /** Deja de escuchar y para el bucle. Es una propiedad flecha para poder pasarla como limpieza. */
  destroy = () => {
    this.resizeObserver.disconnect()
    this.canvas.removeEventListener('pointermove', this.handlePointerMove)
    this.canvas.removeEventListener('pointerleave', this.handlePointerLeave)
    this.reducedMotionQuery.removeEventListener('change', this.handleReducedMotionChange)
    this.stopLoop()
  }

  // ---------- eventos ----------

  private handleResize = () => {
    this.resizeCanvas()
    this.grid = createJellyGrid(this.canvas.clientWidth, this.canvas.clientHeight)
    this.draw()
  }

  private handlePointerMove = (event: PointerEvent) => {
    const canMove = !this.reducedMotionQuery.matches

    if (canMove) {
      const canvasBounds = this.canvas.getBoundingClientRect()
      const pointerX = event.clientX - canvasBounds.left
      const pointerY = event.clientY - canvasBounds.top

      this.pointer = movePointer(this.pointer, pointerX, pointerY)
      this.startLoop()
    }
  }

  // Al salir, los puntos vuelven a su sitio: hace falta animar esa vuelta.
  private handlePointerLeave = () => {
    this.pointer = INACTIVE_POINTER
    this.startLoop()
  }

  // Si la persona activa "reducir movimiento", la red vuelve a su sitio y se queda quieta.
  private handleReducedMotionChange = () => {
    this.stopLoop()
    this.pointer = INACTIVE_POINTER
    this.grid = createJellyGrid(this.canvas.clientWidth, this.canvas.clientHeight)
    this.draw()
  }

  // ---------- bucle ----------

  private handleFrame = () => {
    this.grid = stepJellyGrid(this.grid, this.pointer)
    this.pointer = decayPointer(this.pointer)
    this.draw()

    const isMoving = !isGridAtRest(this.grid)
    this.frameId = isMoving ? requestAnimationFrame(this.handleFrame) : null
  }

  private startLoop() {
    const isStopped = this.frameId === null

    if (isStopped) {
      this.frameId = requestAnimationFrame(this.handleFrame)
    }
  }

  private stopLoop() {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId)
      this.frameId = null
    }
  }

  // ---------- dibujo ----------

  // El canvas tiene píxeles reales (width/height) y píxeles CSS (clientWidth/clientHeight).
  // En pantallas retina hay 2 o 3 píxeles reales por cada píxel CSS: se escala para que se vea nítido.
  private resizeCanvas() {
    const pixelRatio = window.devicePixelRatio || 1

    this.canvas.width = this.canvas.clientWidth * pixelRatio
    this.canvas.height = this.canvas.clientHeight * pixelRatio
    this.context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  }

  private draw() {
    drawJellyGrid(this.context, this.grid, this.colors)
  }
}
