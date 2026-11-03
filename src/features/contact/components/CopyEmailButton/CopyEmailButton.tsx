import { CONTACT_EMAIL } from '@/shared/config/site'
import { useTranslation } from '@/shared/i18n'
import { Button } from '@/shared/ui'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import styles from './CopyEmailButton.module.scss'

/**
 * Copia el correo al portapapeles: útil si no hay una app de correo configurada
 * y el enlace `mailto:` no hace nada. El texto del botón cambia a "¡Copiado!" y
 * la región `role="status"` se lo anuncia también al lector de pantalla.
 */
export function CopyEmailButton() {
  const { dictionary } = useTranslation()
  const { status, copy } = useCopyToClipboard(CONTACT_EMAIL)
  const buttonText = dictionary.contact.copyButton[status]
  const announcement = status === 'idle' ? '' : buttonText

  return (
    <>
      <Button variant="secondary" onClick={copy} className={styles.button} data-status={status}>
        {buttonText}
      </Button>
      <span role="status" className="visually-hidden">
        {announcement}
      </span>
    </>
  )
}
