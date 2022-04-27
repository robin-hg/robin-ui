import React from 'react'
import { useId } from '@rui/hooks'

import { ControlInput } from '../ControlInput'

import { Circle } from './Radio.style'

export interface Props extends Omit<React.ComponentProps<typeof ControlInput>, 'onChange'> {
	checked?: boolean
	error?: boolean
	onChange?: (checked: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { checked, error, color = 'primary', disabled, onChange, ...otherProps } = props
	const id = useId()

	return (
		<ControlInput ref={ref} color={color} disabled={disabled} labelId={id} {...otherProps}>
			<Circle
				id={id}
				type="radio"
				checked={checked}
				onChange={onChange}
				$color={color}
				$checked={!!checked}
				$error={!!error}
				disabled={disabled}
			/>
		</ControlInput>
	)
})

Radio.displayName = 'Checkbox'
