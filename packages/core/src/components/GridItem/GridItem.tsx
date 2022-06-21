import type { DefaultProps } from '@robin-ui/types'
import React from 'react'

import { GridItemContainer } from './GridItem.style'

export interface Props extends DefaultProps<HTMLDivElement, 'span'> {
  span?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl: number }
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export const GridItem = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { span = 1, children, ...otherProps } = props

  const staticSpan = typeof span === 'number'

  return (
    <GridItemContainer
      ref={ref}
      $xs={!staticSpan ? span.xs : undefined}
      $sm={!staticSpan ? span.sm : undefined}
      $md={!staticSpan ? span.md : undefined}
      $lg={!staticSpan ? span.lg : undefined}
      $xl={!staticSpan ? span.xl : span}
      {...otherProps}>
      {children}
    </GridItemContainer>
  )
})

GridItem.displayName = 'GridItem'
