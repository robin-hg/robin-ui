import React from 'react'

import { ModalFooterContainer } from './ModalFooter.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'wrap'> {}

const ModalFooter = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { children, ...otherProps } = props

	return (
		<ModalFooterContainer ref={ref} justifyContent="flex-end" {...otherProps}>
			{children}
		</ModalFooterContainer>
	)
})

ModalFooter.displayName = 'ModalFooter'
export default ModalFooter
