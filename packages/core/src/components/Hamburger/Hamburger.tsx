import { forwardRef } from 'react'

import type { Size } from '@robin-ui/theme'

import type { IconButton } from '../IconButton'

import { Lines, StyledButton } from './Hamburger.style'

export interface Props extends Omit<React.ComponentProps<typeof IconButton>, 'children'> {
  open?: boolean
  size?: Size
}

export const Hamburger = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { open, size = 'md', color = 'surface.onBase', variant = 'text', ...otherProps } = props
  return (
    <StyledButton
      ref={ref}
      size={size}
      color={color}
      variant={variant}
      aria-label="Menu"
      {...otherProps}>
      <Lines $open={!!open} $size={size}>
        <span />
      </Lines>
    </StyledButton>
  )
})

Hamburger.displayName = 'Hamburger'
