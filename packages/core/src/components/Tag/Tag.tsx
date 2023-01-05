import { forwardRef } from 'react'

import type { ColorToken, DefaultProps, Size, SizeValue } from '@robin-ui/types'

import { TagContainer } from './Tag.style'

export interface Props extends DefaultProps<HTMLSpanElement, 'size'> {
  variant?: 'flat' | 'faded' | 'outlined'
  /**
   * Tag color.
   * @default primary
   */
  color?: ColorToken
  /**
   * Tag size.
   * @default md
   */
  size?: Size
  radius?: SizeValue
}

export const Tag = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const {
    variant = 'flat',
    color = 'primary',
    size = 'md',
    radius = 'sm',
    children,
    ...otherProps
  } = props

  return (
    <TagContainer
      ref={ref}
      $variant={variant}
      $color={color}
      $size={size}
      $radius={radius}
      {...otherProps}>
      {children}
    </TagContainer>
  )
})

Tag.displayName = 'Tag'
