import type { DefaultProps, ColorToken, SizeValue } from '@robin-ui/types'
import React from 'react'

import { StyledLink } from './Link.style'

export interface Props extends DefaultProps<HTMLAnchorElement, 'size'> {
  size?: SizeValue
  /**
   * Link color.
   * @default primary
   */
  color?: ColorToken
  /**
   * Underline behavior.
   * @default hover
   */
  underline?: boolean
  disabled?: boolean
  as?: React.ElementType
}

export const Link = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const {
    as,
    size = 'md',
    color = 'primary',
    underline = true,
    disabled,
    onClick,
    children,
    ...otherProps
  } = props

  return (
    <StyledLink
      ref={ref}
      as={as}
      $size={size}
      $color={color}
      $underline={underline}
      onClick={event => {
        if (disabled) {
          event.preventDefault()
          return
        }
        onClick?.(event)
      }}
      disabled={!!disabled}
      tabIndex={disabled ? -1 : 0}
      {...otherProps}>
      {children}
    </StyledLink>
  )
})

Link.displayName = 'Link'
