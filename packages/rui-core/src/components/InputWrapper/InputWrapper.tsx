import type { DefaultProps } from '@rui/types'
import React from 'react'
import { pick } from '@rui/utils'
import { Text } from '../Typography'

import { Label, Description, ErrorMessage } from './InputWrapper.style'

export const extractInputWrapperProps = (props: ExternalInputWrapperProps & Record<string, any>) => {
	const keys: (keyof ExternalInputWrapperProps)[] = ['label', 'description', 'error', 'errorMessage', 'required']
	return pick(props, keys)
}

export interface ExternalInputWrapperProps {
	label?: string
	description?: React.ReactNode
	error?: boolean
	errorMessage?: React.ReactNode
	required?: boolean
}

export interface Props extends DefaultProps<HTMLDivElement>, ExternalInputWrapperProps {
	labelId?: string
	labelFor?: string
}

export const InputWrapper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { label, labelId, labelFor, description, error, errorMessage, required, children, ...otherProps } = props

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
