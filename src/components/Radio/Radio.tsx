import React from 'react'
import { handleEnter } from '@rui/utils'

import ControlInput from '@rui/components/ControlInput'

import { Circle } from './Radio.style'

export interface Props extends Omit<React.ComponentProps<typeof ControlInput>, 'onChange'> {
	checked?: boolean
	indeterminate?: boolean
	error?: boolean
	onChange?: (checked: boolean) => void
}

const Radio = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { checked, indeterminate, error, color = 'primary', disabled, onChange, ...otherProps } = props

	const handleChange = () => onChange?.(true)

	return (
		<ControlInput ref={ref} color={color} disabled={disabled} onChange={handleChange} {...otherProps}>
			<Circle
				$color={color}
				$checked={!!checked || !!indeterminate}
				$error={!!error}
				$disabled={!!disabled}
				onKeyDown={handleEnter(handleChange)}
				tabIndex={disabled ? -1 : 0}>
				<input type="radio" checked={checked} readOnly />
			</Circle>
		</ControlInput>
	)
})

Radio.displayName = 'Checkbox'
export default Radio
