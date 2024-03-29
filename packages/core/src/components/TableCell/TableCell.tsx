import { forwardRef, useContext } from 'react'

import type { DefaultProps, SizeValue } from '@robin-ui/types'

import { TableContext } from '../Table/Table'

import { StyledTableCell } from './TableCell.style'

export interface Props extends DefaultProps<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right'
  padding?: SizeValue | SizeValue[]
}

const TableCellFactory = (variant: 'th' | 'td') => {
  const TableCell = forwardRef<HTMLTableCellElement, Props>((props, ref) => {
    const { align, padding, children, ...otherProps } = props
    const { align: tableAlign, cellPadding: tablePadding } = useContext(TableContext)

    return (
      <StyledTableCell
        ref={ref}
        as={variant}
        $variant={variant}
        $align={align ?? tableAlign}
        $padding={padding ?? tablePadding}
        {...otherProps}>
        {children}
      </StyledTableCell>
    )
  })

  TableCell.displayName = 'TableCell'

  return TableCell
}

export const Th = TableCellFactory('th')

export const Td = TableCellFactory('td')
