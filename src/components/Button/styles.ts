import styled from 'styled-components'

interface ButtonProps {
  variant: 'outline' | 'default' | 'text'
  disableShadow?: boolean
  size: 'sm' | 'md' | 'lg'
  color: 'default' | 'primary' | 'secondary' | 'danger'
}

const backgroundColor = {
  default: 'var(--default-bg)',
  primary: 'var(--primary-bg)',
  secondary: 'var(--secondary-bg)',
  danger: 'var(--danger-bg)',
}

const hoverColor = {
  default: 'var(--default-hover)',
  primary: 'var(--primary-hover)',
  secondary: 'var(--secondary-hover)',
  danger: 'var(--danger-hover)',
}

const textColor = {
  default: 'var(--default-text)',
  primary: 'var(--primary-text)',
  secondary: 'var(--secondary-text)',
  danger: 'var(--danger-text)',
}

const padding = {
  sm: '0.375rem 0.75rem',
  md: '0.5rem 1rem',
  lg: '0.6875rem 1.375rem',
}

function getHoverBg(props: ButtonProps) {
  if (props.disableShadow) return 'default'
  if (props.variant === 'default') return hoverColor[props.color]
  return 'var(--text-hover)'
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;

  border: ${(props) => (props.variant === 'outline' ? '1px solid' : '0')};
  border-radius: 4px;
  padding: ${(props) => padding[props.size]};

  background: ${(props) =>
    props.variant === 'default' ? backgroundColor[props.color] : 'none'};
  color: ${(props) =>
    props.variant === 'default' ? textColor[props.color] : 'var(--primary-bg)'};
  transition: background 0.2s;

  :enabled:hover,
  :enabled:focus {
    background: ${(props) => getHoverBg(props)};
  }

  :disabled {
    cursor: default;
    color: var(--disabled-color);
  }

  span {
    font-size: 0.875rem;
    padding: 0 0.25rem;
  }
`
