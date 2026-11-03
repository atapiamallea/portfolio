// Ajustes de la red gelatina. Son los valores del prototipo, con nombre y explicación.
// Cambiar uno de estos números cambia cómo se siente la red; no hace falta tocar nada más.

/** Distancia en píxeles entre dos puntos vecinos de la red. */
export const POINT_SPACING = 44

/** Hasta qué distancia del cursor (en píxeles) se notan sus empujones. */
export const POINTER_RADIUS = 170

/** Fuerza con la que el cursor aleja los puntos. */
export const PUSH_FORCE = 5.4

/** Cuánto arrastra el cursor a los puntos en la dirección en la que se mueve. */
export const DRAG_FORCE = 0.12

/** Rigidez del resorte: cuanto más alto, más rápido vuelve cada punto a su sitio. */
export const SPRING_STIFFNESS = 0.06

/** Rozamiento (0-1): cuanto más bajo, más frena; cuanto más alto, más rebote de gelatina. */
export const DAMPING = 0.86

/** En cada frame, la velocidad del cursor se reduce a este porcentaje. */
export const POINTER_VELOCITY_DECAY = 0.8

/** Por debajo de esta velocidad (píxeles por frame) un punto se considera quieto. */
export const REST_VELOCITY = 0.01

/** Desplazamiento (en píxeles) a partir del cual un nodo llega a su color y tamaño máximos. */
export const MAX_VISIBLE_STRETCH = 30
