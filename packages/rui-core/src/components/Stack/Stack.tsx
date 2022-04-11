import type { DefaultProps } from '@rui/types'
import React from 'react'

import { StackContainer } from './Stack.style'

export interface Props extends DefaultProps<HTMLDivElement, 'wrap'> {
	spacing?: number | string
}

export const Stack = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { spacing, children, ...otherProps } = props

	return (
		<StackContainer ref={ref} direction="column" alignItems="flex-start" spacing={spacing} {...otherProps}>
			{children}
		</StackContainer>
	)
})

Stack.displayName = 'Stack'
