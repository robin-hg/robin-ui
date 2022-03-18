import { Typography } from 'index'
import React from 'react'

import { ModalHeaderContainer } from './ModalHeader.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'wrap'> {}

const ModalHeader = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { children, ...otherProps } = props

	return (
		<ModalHeaderContainer ref={ref} justifyContent="space-between" {...otherProps}>
			<Typography component="div" variant="subtitle1">
				{children}
			</Typography>
		</ModalHeaderContainer>
	)
})

ModalHeader.displayName = 'ModalHeader'
export default ModalHeader
