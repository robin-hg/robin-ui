import type { DefaultProps } from '@rui/types'
import React from 'react'

import { Text, Label } from '../Typography'

import { InputContainer, Content } from './InputWrapper.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	label?: string
	labelId?: string
	labelFor?: string
	description?: React.ReactNode
	errorMessage?: React.ReactNode
	required?: boolean
	error?: boolean
}

export const InputWrapper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { label, labelId, labelFor, description, errorMessage, required, error, children, ...otherProps } = props

	return (
		<InputContainer ref={ref} spacing="xs" {...otherProps}>
			{label && (
				<Label as="label" id={labelId} htmlFor={labelFor} size="lg">
					{label}
					{required && (
						<Label as="span" role="presentation" color="critical" aria-hidden>
							*
						</Label>
					)}
				</Label>
			)}
			{description && (
				<Text as="div" size="xs" color="surface.onVariant">
					{description}
				</Text>
			)}
			<Content>{children}</Content>
			{error && errorMessage && (
				<Text as="div" size="xs" color="critical">
					{errorMessage}
				</Text>
			)}
		</InputContainer>
	)
})

InputWrapper.displayName = 'InputWrapper'
