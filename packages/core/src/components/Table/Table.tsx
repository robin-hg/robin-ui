import { createContext, forwardRef, useMemo } from 'react'

import type { ColorToken, DefaultProps, SizeValue } from '@robin-ui/types'

export const TableContext = createContext<{
  align?: 'left' | 'center' | 'right'
  cellPadding?: SizeValue | SizeValue[]
}>({})

import { StyledTable } from './Table.style'

export interface Props extends DefaultProps<HTMLTableElement, 'cellPadding'> {
  tint?: ColorToken
  align?: 'left' | 'center' | 'right'
  padding?: SizeValue | SizeValue[]
  cellPadding?: SizeValue | SizeValue[]
  radius?: SizeValue
}

export const Table = forwardRef<HTMLTableElement, Props>((props, ref) => {
  const { align = 'left', cellPadding = 'sm', radius = 'md', children, ...otherProps } = props

  const ctxValue = useMemo(() => ({ align, cellPadding }), [align, cellPadding])

  return (
    <StyledTable ref={ref} $radius={radius} {...otherProps}>
      <TableContext.Provider value={ctxValue}>{children}</TableContext.Provider>
    </StyledTable>
  )
})

Table.displayName = 'Table'
