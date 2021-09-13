import React from 'react'

import { Container } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'default' | 'text'
  disableShadow?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'danger'
  startIcon?: string
  endIcon?: string
}

function Button({
  children = 'Default',
  type = 'button',
  variant = 'default',
  disableShadow,
  size = 'md',
  color = 'default',
  startIcon,
  endIcon,
  ...rest
}: ButtonProps) {
  return (
    <Container
      type={type}
      variant={variant}
      disableShadow={disableShadow}
      size={size}
      color={color}
      {...rest}
    >
      {startIcon && <span className="material-icons">{startIcon}</span>}
      {children}
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </Container>
  )
}

export { Button }

Button.defaultProps = {
  variant: 'default',
  disableShadow: false,
  size: 'md',
  color: 'default',
  startIcon: undefined,
  endIcon: undefined,
}
