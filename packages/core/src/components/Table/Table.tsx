import type { DefaultProps, SizeValue, ColorToken } from '@robin-ui/types'
import React, { useMemo } from 'react'

export const TableContext = React.createContext<{
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

export const Table = React.forwardRef<HTMLTableElement, Props>((props, ref) => {
	const { align = 'left', cellPadding = 'sm', radius = 'md', children, ...otherProps } = props

	const ctxValue = useMemo(() => ({ align, cellPadding }), [align, cellPadding])

	return (
		<StyledTable ref={ref} $radius={radius} {...otherProps}>
			<TableContext.Provider value={ctxValue}>{children}</TableContext.Provider>
		</StyledTable>
	)
})

Table.displayName = 'Table'
