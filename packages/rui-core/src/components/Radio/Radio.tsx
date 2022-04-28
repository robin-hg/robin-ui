import React, { useContext, useState } from 'react'
import { useId } from '@rui/hooks'
import { RadioGroupContext } from '../RadioGroup'

import { ControlInput } from '../ControlInput'

import { Circle } from './Radio.style'

export interface Props extends Omit<React.ComponentProps<typeof ControlInput>, 'onChange' | 'defaultValue'> {
	value?: string | number
	checked?: boolean
	defaultValue?: boolean
	error?: boolean
	onChange?: (checked: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { value, checked, defaultValue, error, color = 'primary', disabled, onChange, ...otherProps } = props
	const {
		error: groupError,
		disabled: groupDisabled,
		value: groupValue,
		onChange: groupOnChange
	} = useContext(RadioGroupContext)
	const id = useId()

	const [uncontrolled, setUncontrolled] = useState(!!defaultValue)
	const inGroup = !!groupOnChange
	const isUncontrolled = !inGroup && checked === undefined
	const _checked = isUncontrolled ? uncontrolled : !!checked

	return (
		<ControlInput ref={ref} color={color} disabled={disabled} labelFor={id} {...otherProps}>
			<Circle
				id={id}
				type="radio"
				checked={inGroup ? value === groupValue : _checked}
				onChange={event => {
					if (inGroup) {
						groupOnChange(value)
					}
					if (isUncontrolled) {
						setUncontrolled(event.target.checked)
					}
					onChange?.(event)
				}}
				$color={color}
				$error={!!error || !!groupError}
				disabled={disabled || groupDisabled}
			/>
		</ControlInput>
	)
})

Radio.displayName = 'Checkbox'
