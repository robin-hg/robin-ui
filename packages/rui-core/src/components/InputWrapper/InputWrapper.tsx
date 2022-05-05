import type { DefaultProps } from '@rui/types'
import React from 'react'
import { Stack } from '../Stack'
import { Text } from '../Typography'

import { Label, Description } from './InputWrapper.style'

export const inputWrapperProps = ['label', 'description', 'error', 'errorMessage', 'required'] as const

export type InputWrapperProps = Pick<Props, typeof inputWrapperProps[number]>

export interface Props extends DefaultProps<HTMLDivElement> {
	label?: string
	labelId?: string
	labelFor?: string
	description?: React.ReactNode
	error?: boolean
	errorMessage?: React.ReactNode
	required?: boolean
}

export const InputWrapper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { label, labelId, labelFor, description, error, errorMessage, required, children, ...otherProps } = props

	return (
		<Stack ref={ref} spacing="sm" {...otherProps}>
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
				<Text as="div" size="xs" color="critical" bold>
					{errorMessage}
				</Text>
			)}
		</Stack>
	)
})

InputWrapper.displayName = 'InputWrapper'
