import React, { useContext } from 'react'
import { useId } from '@rui/hooks'
import { RadioGroupContext } from '../RadioGroup'

import { ControlInput } from '../ControlInput'

import { Circle } from './Radio.style'

export interface Props extends Omit<React.ComponentProps<typeof ControlInput>, 'onChange'> {
	value?: string | number
	checked?: boolean
	error?: boolean
	onChange?: (checked: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { value, checked, error, color = 'primary', disabled, onChange, ...otherProps } = props
	const { value: groupValue, onChange: groupOnChange } = useContext(RadioGroupContext)
	const id = useId()

	return (
		<ControlInput ref={ref} color={color} disabled={disabled} labelFor={id} {...otherProps}>
			<Circle
				id={id}
				type="radio"
				checked={checked || value === groupValue}
				onChange={event => {
					if (value && groupOnChange) {
						groupOnChange(value)
						return
					}
					onChange?.(event)
				}}
				$color={color}
				$error={!!error}
				disabled={disabled}
			/>
		</ControlInput>
	)
})

Radio.displayName = 'Checkbox'
