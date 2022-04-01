import React from 'react'
import { useId } from '@rui/hooks'

import InputBox from '@rui/components/InputBox'

import { StyledInput } from './TextInput.style'

export interface Props extends Omit<React.ComponentProps<typeof InputBox>, 'onChange' | 'labelId'> {
	value?: string
	placeholder?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const TextInput = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { value, placeholder, disabled, onChange, ...otherProps } = props
	const id = useId()

	return (
		<InputBox ref={ref} labelId={id} disabled={disabled} {...otherProps}>
			<StyledInput id={id} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />
		</InputBox>
	)
})

TextInput.displayName = 'TextInput'
export default TextInput
