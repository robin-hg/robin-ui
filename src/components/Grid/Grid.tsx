import React from 'react'
import { parseSize } from '@rui/utils'

import { GridContainer } from './Grid.style'

type Gap = number | string

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {
	columns?: number | { sm?: number; md?: number; lg?: number; xl: number }
	spacing?: Gap | Gap[]
}

const Grid = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { columns = 12, spacing = 16, children, ...otherProps } = props

	const staticColumns = typeof columns === 'number'
	const gridGap = Array.isArray(spacing) ? spacing.map(parseSize).join(' ') : parseSize(spacing)

	return (
		<GridContainer
			ref={ref}
			$sm={!staticColumns ? columns.sm : undefined}
			$md={!staticColumns ? columns.md : undefined}
			$lg={!staticColumns ? columns.lg : undefined}
			$xl={!staticColumns ? columns.xl : columns}
			$spacing={gridGap}
			{...otherProps}>
			{children}
		</GridContainer>
	)
})

Grid.displayName = 'Grid'
export default Grid
