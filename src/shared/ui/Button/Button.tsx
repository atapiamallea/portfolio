import type { ComponentProps } from 'react'
import { joinClassNames } from '@/shared/lib/joinClassNames'
import type { Accent } from '@/shared/styles/tokens'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'inverted'
type ButtonSize = 'md' | 'lg'

interface ButtonOwnProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

// Con `href` es un enlace (navega); sin `href` es un botón (ejecuta una acción).
type ButtonAsLink = ButtonOwnProps & ComponentProps<'a'> & { href: string }
type ButtonAsButton = ButtonOwnProps & ComponentProps<'button'> & { href?: undefined }

export type ButtonProps = ButtonAsLink | ButtonAsButton

const VARIANT_ACCENT: Record<ButtonVariant, Accent> = {
  primary: 'lime',
  secondary: 'paper',
  inverted: 'ink',
}

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const buttonClassName = joinClassNames(styles.button, styles[size], styles[variant], className)
  const accent = VARIANT_ACCENT[variant]
  const isLink = props.href !== undefined

  return isLink ? (
    <a {...props} className={buttonClassName} data-accent={accent} />
  ) : (
    <button type="button" {...props} className={buttonClassName} data-accent={accent} />
  )
}
