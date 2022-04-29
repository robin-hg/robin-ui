import type { DefaultProps } from '@rui/types'
import React from 'react'
import { Text } from '../Typography'

import { Label, Description, ErrorMessage } from './InputWrapper.style'

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
		<div ref={ref} {...otherProps}>
			{label && (
				<Label as="label" id={labelId} htmlFor={labelFor} size="lg">
					{label}
					{required && (
						<Text as="span" role="presentation" color="critical" aria-hidden>
							*
						</Text>
					)}
				</Label>
			)}
			{description && (
				<Description as="div" size="xs" color="surface.onVariant">
					{description}
				</Description>
			)}
			{children}
			{error && errorMessage && (
				<ErrorMessage as="div" size="xs" color="critical" bold>
					{errorMessage}
				</ErrorMessage>
			)}
		</div>
	)
})

InputWrapper.displayName = 'InputWrapper'
