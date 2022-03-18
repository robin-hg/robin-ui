import React from 'react'

import { GridItemContainer } from './GridItem.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {
	sm?: number
	md?: number
	lg?: number
	xl?: number
}

const Grid = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { sm, md, lg, xl = 1, children, ...otherProps } = props

	return (
		<GridItemContainer ref={ref} $sm={sm} $md={md} $lg={lg} $xl={xl} {...otherProps}>
			{children}
		</GridItemContainer>
	)
})

Grid.displayName = 'Grid'
export default Grid
