import type { DefaultProps, ColorToken } from '@rui/types'
import React from 'react'
import { Text } from '../Typography'

import { ControlInputContainer, Control } from './ControlInput.style'

export interface Props extends DefaultProps<HTMLDivElement, 'label'> {
	color?: ColorToken
	label?: number | string
	labelFor?: string
	labelPosition?: 'left' | 'right'
}

export const ControlInput = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { color = 'primary', label, labelFor, labelPosition = 'right', children, disabled, ...otherProps } = props

	return (
		<ControlInputContainer
			ref={ref}
			component={label ? 'label' : 'span'}
			$labelPosition={labelPosition}
			$color={color}
			disabled={disabled}
			{...otherProps}>
			<Control>{children}</Control>
			{label && (
				<Text as="label" size="sm" htmlFor={labelFor}>
					{label}
				</Text>
			)}
		</ControlInputContainer>
	)
})

ControlInput.displayName = 'ControlInput'
