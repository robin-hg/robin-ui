import type { DefaultProps } from '@robin-ui/types'
import React from 'react'
import { StyledTableRow } from './TableRow.style'

export interface Props extends DefaultProps<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, Props>((props, ref) => {
	const { children, ...otherProps } = props

	return (
		<StyledTableRow ref={ref} {...otherProps}>
			{children}
		</StyledTableRow>
	)
})

TableRow.displayName = 'TableRow'

export const Tr = TableRow
