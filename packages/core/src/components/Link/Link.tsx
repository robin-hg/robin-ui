import { forwardRef } from 'react'

import type { ColorToken, DefaultProps, SizeValue } from '@robin-ui/types'

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

export const Link = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const {
    as,
    size = 'md',
    color = 'primary',
    underline = true,
    disabled,
    href,
    onClick,
    children,
    ...otherProps
  } = props

  return (
    <StyledLink
      ref={ref}
      as={as ?? (href ? 'a' : 'button')}
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
      href={href}
      {...otherProps}>
      {children}
    </StyledLink>
  )
})

Link.displayName = 'Link'
