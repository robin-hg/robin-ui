import React, { useContext } from 'react'
import { ModalContext } from '@rui/components/Modal'

import Typography from '@rui/components/Typography'

import { ModalHeaderContainer } from './ModalHeader.style'
import Button from '@rui/components/Button'
import { X } from '@rui/icons'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'wrap'> {}

const ModalHeader = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { children, ...otherProps } = props
	const { id, onClose } = useContext(ModalContext)

	return (
		<ModalHeaderContainer ref={ref} justifyContent="space-between" {...otherProps}>
			<Typography id={id} component="div" variant="subtitle">
				{children}
			</Typography>
			{onClose && (
				<Button onClick={onClose} variant="text" color="text.light" size="sm" aria-label="Close">
					<X />
				</Button>
			)}
		</ModalHeaderContainer>
	)
})

ModalHeader.displayName = 'ModalHeader'
export default ModalHeader
