import type { DefaultProps } from '@rui/types'
import React from 'react'
import { useId } from '@rui/hooks'

import { InputBox } from '../InputBox'
import { InputWrapper } from '../InputWrapper'

export interface Props extends DefaultProps<HTMLInputElement, 'children'> {
	// InputWrapper props
	label?: string
	description?: string
	error?: boolean
	errorMessage?: React.ReactNode
	required?: boolean
	// InputBox props
	leftAdornment?: React.ReactNode
	rightAdornment?: React.ReactNode
	// TextInput props
	value?: string
	disabled?: boolean
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
	const {
		label,
		description,
		required,
		disabled,
		error,
		errorMessage,
		leftAdornment,
		rightAdornment,
		value,
		onChange,
		id,
		className,
		...otherProps
	} = props
	const _id = useId(id)

	return (
		<InputWrapper
			label={label}
			labelFor={_id}
			description={description}
			required={required}
			error={error}
			errorMessage={errorMessage}
			className={className}>
			<InputBox error={error} disabled={disabled} leftAdornment={leftAdornment} rightAdornment={rightAdornment}>
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
