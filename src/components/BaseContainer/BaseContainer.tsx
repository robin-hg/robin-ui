import React from 'react'
import { StyledBaseContainer } from './BaseContainer.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {
	component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const BaseContainer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { component, children, ...otherProps } = props

	return (
		<StyledBaseContainer ref={ref} as={component} {...otherProps}>
			{children}
		</StyledBaseContainer>
	)
})

BaseContainer.displayName = 'BaseContainer'
export default BaseContainer
