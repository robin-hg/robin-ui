import type { DefaultProps } from '@rui/types'
import React from 'react'
import { omit, pick } from '@rui/utils'
import { useId } from '@rui/hooks'

import { InputWrapper, inputWrapperProps, type InputWrapperProps } from '../InputWrapper'
import { InputBox, inputBoxProps, type InputBoxProps } from '../InputBox'

export interface Props extends DefaultProps<HTMLInputElement, 'children'>, InputWrapperProps, InputBoxProps {
	placeholder?: string
	value?: string
	disabled?: boolean
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
	const { placeholder, disabled, required, value, onChange, id, className, ...otherProps } = props
	const _id = useId(id)

	const extractedInputWrapperProps = pick(props, inputWrapperProps.concat())
	const extractedInputBoxProps = pick(props, inputBoxProps.concat())
	const rest = omit(otherProps, [...inputWrapperProps, ...inputBoxProps])

	return (
		<InputWrapper labelFor={_id} className={className} {...extractedInputWrapperProps}>
			<InputBox {...extractedInputBoxProps}>
				<input
					id={_id}
					ref={ref}
					type="text"
					placeholder={placeholder}
					value={value}
					required={required}
					disabled={disabled}
					onChange={onChange}
					{...rest}
				/>
			</InputBox>
		</InputWrapper>
	)
})

TextInput.displayName = 'TextInput'
