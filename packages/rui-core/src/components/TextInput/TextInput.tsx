import React from 'react'
import { omit, pick } from '@rui/utils'
import { useId } from '@rui/hooks'

import { InputWrapper, inputWrapperProps, type InputWrapperProps } from '../InputWrapper'
import { InputBox } from '../InputBox'

export interface Props extends Omit<React.ComponentProps<typeof InputBox>, 'children'>, InputWrapperProps {
	placeholder?: string
	value?: string
	disabled?: boolean
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	inputProps?: React.HTMLProps<HTMLInputElement>
}

export const TextInput = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { placeholder, disabled, error, required, value, onChange, id, className, name, inputProps, ...otherProps } =
		props
	const _id = useId(id)

	const extractedInputWrapperProps = pick(props, inputWrapperProps.concat())
	const rest = omit(otherProps, [...inputWrapperProps])

	return (
		<InputWrapper labelFor={_id} className={className} {...extractedInputWrapperProps}>
			<InputBox ref={ref} disabled={disabled} error={error} {...rest}>
				<input
					id={_id}
					type="text"
					name={name}
					placeholder={placeholder}
					value={value}
					required={required}
					disabled={disabled}
					onChange={onChange}
					{...inputProps}
				/>
			</InputBox>
		</InputWrapper>
	)
})

TextInput.displayName = 'TextInput'
