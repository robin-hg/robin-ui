import React from 'react'

import { ModalContentContainer } from './ModalContent.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {}

const ModalContent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { children, ...otherProps } = props

	return (
		<ModalContentContainer ref={ref} {...otherProps}>
			{children}
		</ModalContentContainer>
	)
})

ModalContent.displayName = 'ModalContent'
export default ModalContent
