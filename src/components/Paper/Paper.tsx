import React from 'react'

import { PaperContainer } from './Paper.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {
	elevation?: number
	color?: string
	component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const Paper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { component, elevation = 1, color = 'paper', children, ...otherProps } = props

	return (
		<PaperContainer ref={ref} component={component} $elevation={elevation} $color={color} {...otherProps}>
			{children}
		</PaperContainer>
	)
})

Paper.displayName = 'Paper'
export default Paper
