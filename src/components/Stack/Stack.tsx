import React from 'react'

import FlexBox from '@rui/components/FlexBox'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'wrap'> {
	spacing?: number | string
}

const Stack = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { spacing, children, ...otherProps } = props

	return (
		<FlexBox ref={ref} direction="column" alignItems="flex-start" spacing={spacing} {...otherProps}>
			{children}
		</FlexBox>
	)
})

Stack.displayName = 'Stack'
export default Stack
