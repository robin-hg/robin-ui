import type { DefaultProps } from '@robin-ui/types'
import React, { useContext } from 'react'
import { ModalContext } from '../Modal'

import { ModalContentContainer } from './ModalContent.style'

export interface Props extends DefaultProps<HTMLDivElement> {}

export const ModalContent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { children, ...otherProps } = props
	const { contentId } = useContext(ModalContext)

	return (
		<ModalContentContainer ref={ref} id={contentId} {...otherProps}>
			{children}
		</ModalContentContainer>
	)
})

ModalContent.displayName = 'ModalContent'
