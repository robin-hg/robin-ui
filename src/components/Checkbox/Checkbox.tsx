import React from 'react'
import { handleEnter } from '@rui/utils'

import ControlInput from '@rui/components/ControlInput'

import { Box } from './Checkbox.style'
import { Check, Minus } from '@rui/icons'

export interface Props extends Omit<React.ComponentProps<typeof ControlInput>, 'onChange'> {
	checked?: boolean
	indeterminate?: boolean
	error?: boolean
	onChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { checked, indeterminate, error, color = 'primary', disabled, onChange, ...otherProps } = props

	const handleChange = () => onChange?.(!checked)

	return (
		<ControlInput ref={ref} color={color} disabled={disabled} onChange={handleChange} {...otherProps}>
			<Box
				$color={color}
				$checked={!!checked || !!indeterminate}
				$error={!!error}
				$disabled={!!disabled}
				onKeyDown={handleEnter(handleChange)}
				tabIndex={disabled ? -1 : 0}>
				<input type="checkbox" checked={checked} readOnly />
				{checked ? <Check /> : indeterminate ? <Minus /> : null}
			</Box>
		</ControlInput>
	)
})

Checkbox.displayName = 'Checkbox'
export default Checkbox
