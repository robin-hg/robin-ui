import React from 'react'
import { useId } from '@rui/hooks'

import { ControlInput } from '../ControlInput'

import { BoxContainer, Box } from './Checkbox.style'
import { Check, Minus } from '@rui/icons'

export interface Props extends Omit<React.ComponentProps<typeof ControlInput>, 'onChange'> {
	checked?: boolean
	indeterminate?: boolean
	error?: boolean
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { checked, indeterminate, error, color = 'primary', disabled, onChange, ...otherProps } = props
	const id = useId()

	return (
		<ControlInput ref={ref} color={color} disabled={disabled} labelFor={id} {...otherProps}>
			<BoxContainer>
				<Box
					id={id}
					type="checkbox"
					checked={checked}
					onChange={onChange}
					$color={color}
					$checked={!!checked || !!indeterminate}
					$error={!!error}
					disabled={disabled}
				/>
				{checked ? <Check /> : indeterminate ? <Minus /> : null}
			</BoxContainer>
		</ControlInput>
	)
})

Checkbox.displayName = 'Checkbox'
