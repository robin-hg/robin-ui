import { forwardRef } from 'react'

import type { ColorToken, DefaultProps, SizeValue } from '@robin-ui/types'

import { DividerLine } from './Divider.style'

export interface Props extends DefaultProps<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  color?: ColorToken
  thickness?: SizeValue
  spacing?: SizeValue
  alignLabel?: 'start' | 'center' | 'end'
}

export const Divider = forwardRef<HTMLHRElement, Props>((props, ref) => {
  const {
    orientation = 'horizontal',
    color = 'outline',
    thickness = 'xs',
    spacing = 'md',
    alignLabel = 'center',
    children,
    ...otherProps
  } = props

  return (
    <DividerLine
      ref={ref}
      role="separator"
      $orientation={orientation}
      $color={color}
      $thickness={thickness}
      $spacing={spacing}
      $alignLabel={alignLabel}
      $hasChildren={children !== undefined}
      {...otherProps}>
      {children}
    </DividerLine>
  )
})

Divider.displayName = 'Divider'
