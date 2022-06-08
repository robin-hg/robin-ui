import type { DefaultProps, SizeValue } from '@robin-ui/types'
import React from 'react'

import { StackContainer } from './Stack.style'

export interface Props extends DefaultProps<HTMLDivElement, 'wrap'> {
	spacing?: SizeValue
	direction?: React.CSSProperties['flexDirection']
}

export const Stack = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { spacing, direction = 'column', children, ...otherProps } = props

	return (
		<StackContainer
			ref={ref}
			direction={direction}
			alignItems="flex-start"
			spacing={spacing}
			{...otherProps}>
			{children}
		</StackContainer>
	)
})

Stack.displayName = 'Stack'
