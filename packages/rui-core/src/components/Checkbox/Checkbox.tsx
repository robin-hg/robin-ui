import React, { useState } from 'react'
import { useId } from '@rui/hooks'

import { ControlInput } from '../ControlInput'

import { BoxContainer, Box } from './Checkbox.style'
import { Check, Minus } from '@rui/icons'

export interface Props extends Omit<React.ComponentProps<typeof ControlInput>, 'onChange' | 'defaultValue'> {
	checked?: boolean
	defaultValue?: boolean
	indeterminate?: boolean
	error?: boolean
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { checked, defaultValue, indeterminate, error, color = 'primary', disabled, onChange, ...otherProps } = props
	const id = useId()

	const [uncontrolled, setUncontrolled] = useState(!!defaultValue)
	const isUncontrolled = checked === undefined
	const _checked = isUncontrolled ? uncontrolled : checked

	return (
		<ControlInput ref={ref} color={color} disabled={disabled} labelFor={id} {...otherProps}>
			<BoxContainer>
				<Box
					id={id}
					type="checkbox"
					checked={_checked || !!indeterminate}
					onChange={event => {
						if (isUncontrolled) {
							setUncontrolled(event.target.checked)
						}
						onChange?.(event)
					}}
					$color={color}
					$error={!!error}
					disabled={disabled}
				/>
				{_checked ? <Check /> : indeterminate ? <Minus /> : null}
			</BoxContainer>
		</ControlInput>
	)
})

Checkbox.displayName = 'Checkbox'
