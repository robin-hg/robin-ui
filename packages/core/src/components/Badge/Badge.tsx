import type { ColorToken, DefaultProps, SizeValue } from '@robin-ui/types'
import React from 'react'

import { BadgeCircle, BadgeContainer } from './Badge.style'

export interface Props extends DefaultProps<HTMLDivElement, 'size' | 'content'> {
  position?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  color?: ColorToken
  size?: SizeValue
  content?: string | number
}

export const Badge = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    position = 'top-end',
    color = 'primary',
    size = 'xs',
    content,
    children,
    ...otherProps
  } = props

  return (
    <BadgeContainer ref={ref} {...otherProps}>
      <BadgeCircle $position={position} $color={color} $size={size} $small={content === undefined}>
        {content}
      </BadgeCircle>
      {children}
    </BadgeContainer>
  )
})

Badge.displayName = 'Badge'
