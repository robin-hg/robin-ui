import React, { useContext } from 'react'
import { ModalContext } from '../Modal'

import { Text } from '../Typography'

import { FlexBox } from '../FlexBox'
import { Button } from '../Button'
import { X } from '@rui/icons'
import type { DefaultProps } from '@rui/types'

export interface Props extends DefaultProps<HTMLDivElement, 'wrap'> {}

export const ModalHeader = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { children, ...otherProps } = props
	const { id, onClose } = useContext(ModalContext)

	return (
		<FlexBox ref={ref} justifyContent="space-between" {...otherProps}>
			<Text id={id} as="div" size="xl">
				{children}
			</Text>
			{onClose && (
				<Button onClick={onClose} variant="text" color="text.light" size="sm" aria-label="Close">
					<X />
				</Button>
			)}
		</FlexBox>
	)
})

ModalHeader.displayName = 'ModalHeader'
