import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'

/** Estado de la última copia. Vuelve a `idle` pasados unos segundos. */
export type CopyStatus = 'idle' | 'copied' | 'failed'

const RESET_DELAY_MS = 2500

// La API del portapapeles puede fallar (permiso denegado, página sin HTTPS…):
// en vez de lanzar el error, lo convertimos en un estado que la interfaz sabe pintar.
async function writeToClipboard(text: string): Promise<CopyStatus> {
  try {
    await navigator.clipboard.writeText(text)
    return 'copied'
  } catch {
    return 'failed'
  }
}

// `setTimeout` pasa sus argumentos extra a la función: así no hace falta otra flecha.
function scheduleReset(
  status: CopyStatus,
  setStatus: Dispatch<SetStateAction<CopyStatus>>,
): (() => void) | undefined {
  if (status === 'idle') {
    return undefined
  }

  const timeoutId = window.setTimeout(setStatus, RESET_DELAY_MS, 'idle')

  return () => window.clearTimeout(timeoutId)
}

/** Copia `text` al portapapeles y cuenta si ha salido bien, durante unos segundos. */
export function useCopyToClipboard(text: string) {
  const [status, setStatus] = useState<CopyStatus>('idle')

  useEffect(() => scheduleReset(status, setStatus), [status])

  const copy = () => void writeToClipboard(text).then(setStatus)

  return { status, copy }
}
