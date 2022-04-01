import React, { useContext } from 'react'
import { ModalContext } from '@rui/components/Modal'

import { ModalFooterContainer } from './ModalFooter.style'
import Button from '@rui/components/Button'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'wrap'> {
	closeButton?: React.ReactNode
}

const ModalFooter = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { closeButton = 'Close', children, ...otherProps } = props
	const { onClose } = useContext(ModalContext)

	return (
		<ModalFooterContainer ref={ref} justifyContent="flex-end" {...otherProps}>
			{closeButton && onClose && (
				<Button onClick={onClose} variant="text" color="text">
					{closeButton}
				</Button>
			)}
			{children}
		</ModalFooterContainer>
	)
})

ModalFooter.displayName = 'ModalFooter'
export default ModalFooter
