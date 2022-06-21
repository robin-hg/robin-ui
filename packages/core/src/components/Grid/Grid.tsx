import type { DefaultProps, SizeValue } from '@robin-ui/types'
import React from 'react'

import { GridContainer } from './Grid.style'

export interface Props extends DefaultProps<HTMLDivElement> {
  columns?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl: number }
  spacing?: SizeValue | [SizeValue, SizeValue]
}

// TODO: Expand grid functionality (columns, etc.)
export const Grid = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { columns = 12, spacing = 'md', children, ...otherProps } = props

  const staticColumns = typeof columns === 'number'

  return (
    <GridContainer
      ref={ref}
      $xs={!staticColumns ? columns.xs : undefined}
      $sm={!staticColumns ? columns.sm : undefined}
      $md={!staticColumns ? columns.md : undefined}
      $lg={!staticColumns ? columns.lg : undefined}
      $xl={!staticColumns ? columns.xl : columns}
      $spacing={spacing}
      {...otherProps}>
      {children}
    </GridContainer>
  )
})

Grid.displayName = 'Grid'
