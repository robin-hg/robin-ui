import type { DefaultProps, ColorToken } from '@rui/types'
import React, { useState } from 'react'
import { useId } from '@rui/hooks'

import { ControlInput } from '../ControlInput'

import { Box } from './Checkbox.style'
import { Check, Minus } from '@rui/icons'

export interface Props extends DefaultProps<HTMLInputElement, 'children' | 'label' | 'defaultValue'> {
	color?: ColorToken
	label?: number | string
	labelPosition?: 'left' | 'right'
	checked?: boolean
	defaultValue?: boolean
	indeterminate?: boolean
	error?: boolean
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		color = 'primary',
		label,
		labelPosition,
		checked,
		defaultValue,
		indeterminate,
		error,
		disabled,
		onChange,
		id,
		className,
		...otherProps
	} = props
	const _id = useId()

	const [uncontrolled, setUncontrolled] = useState(!!defaultValue)
	const isUncontrolled = checked === undefined
	const _checked = isUncontrolled ? uncontrolled : checked

	return (
		<ControlInput
			ref={ref}
			color={color}
			disabled={disabled}
			label={label}
			labelFor={id || _id}
			labelPosition={labelPosition}
			className={className}>
			<Box
				{...otherProps}
				id={id || _id}
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
		</ControlInput>
	)
})

Checkbox.displayName = 'Checkbox'
