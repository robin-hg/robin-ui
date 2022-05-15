import { useId } from '@rui/hooks'
import type { DefaultProps } from '@rui/types'
import React, { useMemo } from 'react'
import { Stack } from '../Stack'
import { Text } from '../Typography'

import { Label, Description } from './InputWrapper.style'

export const InputWrapperContext = React.createContext<{
	labelId?: string
	labelFor?: string
	error?: boolean
	required?: boolean
	disabled?: boolean
}>({})

export interface Props extends DefaultProps<HTMLDivElement> {
	label?: string
	labelId?: string
	labelFor?: string
	description?: React.ReactNode
	errorMessage?: React.ReactNode

	// state props
	error?: boolean
	required?: boolean
	disabled?: boolean
}

export const InputWrapper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		label,
		labelId: labelIdOverride,
		labelFor: labelForOverride,
		description,
		error,
		errorMessage,
		required,
		disabled,
		children,
		...otherProps
	} = props

	const labelId = useId(labelIdOverride)
	const labelFor = useId(labelForOverride)

	const ctxValue = useMemo(
		() => ({
			labelId,
			labelFor,
			error,
			required,
			disabled
		}),
		[error, required, disabled]
	)

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
			<InputWrapperContext.Provider value={ctxValue}>{children}</InputWrapperContext.Provider>
			{error && errorMessage && (
				<Text as="div" size="xs" color="critical" bold>
					{errorMessage}
				</Text>
			)}
		</Stack>
	)
})

InputWrapper.displayName = 'InputWrapper'
