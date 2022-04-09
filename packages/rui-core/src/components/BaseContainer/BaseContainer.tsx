import React from 'react'
import type { DefaultProps } from '@rui/types'
import { StyledBaseContainer } from './BaseContainer.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	component?: React.ElementType
}

export const BaseContainer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { component, children, ...otherProps } = props

	return (
		<StyledBaseContainer ref={ref} as={component} {...otherProps}>
			{children}
		</StyledBaseContainer>
	)
})

BaseContainer.displayName = 'BaseContainer'
