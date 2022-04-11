import type { DefaultProps, SizeValue } from '@rui/types'
import React from 'react'

import { GridContainer } from './Grid.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	columns?: number | { sm?: number; md?: number; lg?: number; xl: number }
	spacing?: SizeValue | [SizeValue, SizeValue]
}

export const Grid = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { columns = 12, spacing = 'md', children, ...otherProps } = props

	const staticColumns = typeof columns === 'number'

	return (
		<GridContainer
			ref={ref}
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
