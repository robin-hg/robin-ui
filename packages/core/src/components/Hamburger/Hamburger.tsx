import type { Size } from '@robin-ui/theme'
import React from 'react'

import type { IconButton } from '../IconButton'

import { StyledButton, Lines } from './Hamburger.style'

export interface Props extends Omit<React.ComponentProps<typeof IconButton>, 'children'> {
  open?: boolean
  size?: Size
}

export const Hamburger = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { open, size = 'md', color = 'surface.onBase', variant = 'text', ...otherProps } = props
  return (
    <StyledButton ref={ref} size={size} color={color} variant={variant} {...otherProps}>
      <Lines $open={!!open} $size={size}>
        <span />
      </Lines>
    </StyledButton>
  )
})

Hamburger.displayName = 'Hamburger'
