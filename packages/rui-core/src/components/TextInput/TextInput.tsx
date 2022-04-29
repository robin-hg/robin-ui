import type { DefaultProps } from '@rui/types'
import React from 'react'
import { useId } from '@rui/hooks'

import { extractInputBoxProps, InputBox, type ExternalInputBoxProps } from '../InputBox'
import { InputWrapper, extractInputWrapperProps, type ExternalInputWrapperProps } from '../InputWrapper'
import { omit } from '@rui/utils'

export interface Props
	extends DefaultProps<HTMLInputElement, 'children'>,
		ExternalInputWrapperProps,
		ExternalInputBoxProps {
	value?: string
	disabled?: boolean
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
	const { disabled, required, value, onChange, id, className } = props
	const _id = useId(id)

	const inputWrapperProps = extractInputWrapperProps(props)
	const inputBoxProps = extractInputBoxProps(props)
	const otherProps = omit(props, [...Object.keys(inputWrapperProps), ...Object.keys([inputBoxProps])])

	return (
		<InputWrapper labelFor={_id} className={className} {...inputWrapperProps}>
			<InputBox {...inputBoxProps}>
				<input
					id={_id}
					ref={ref}
					type="text"
					value={value}
					required={required}
					disabled={disabled}
					onChange={onChange}
					{...otherProps}
				/>
			</InputBox>
		</InputWrapper>
	)
})

TextInput.displayName = 'TextInput'
