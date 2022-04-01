import React, { useContext } from 'react'
import { ModalContext } from '@rui/components/Modal'

import { ModalContentContainer } from './ModalContent.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {}

const ModalContent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { children, ...otherProps } = props
	const { contentId } = useContext(ModalContext)

	return (
		<ModalContentContainer ref={ref} id={contentId} {...otherProps}>
			{children}
		</ModalContentContainer>
	)
})

ModalContent.displayName = 'ModalContent'
export default ModalContent
