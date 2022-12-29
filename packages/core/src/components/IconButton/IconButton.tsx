import { forwardRef } from 'react'

import type { SizeValue } from '@robin-ui/theme'

import type { Button } from '../Button'

import { StyledButton } from './IconButton.style'

export interface Props extends Omit<React.ComponentProps<typeof Button>, 'size'> {
  size?: SizeValue
}

export const IconButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { size = 'md', children, ...otherProps } = props

  return (
    <StyledButton ref={ref} $size={size} {...otherProps}>
      {children}
    </StyledButton>
  )
})

IconButton.displayName = 'IconButton'
