import type { DefaultProps } from '@rui/types'
import React from 'react'
import { StyledTableRow } from './TableRow.style'

export interface Props extends DefaultProps<HTMLTableRowElement> {}

export const TableRow = React.forwardRef<HTMLTableRowElement, Props>((props, ref) => {
	const { children, ...otherProps } = props

	return (
		<StyledTableRow ref={ref} {...otherProps}>
			{children}
		</StyledTableRow>
	)
})

TableRow.displayName = 'TableRow'

// alias
export const Tr = TableRow
