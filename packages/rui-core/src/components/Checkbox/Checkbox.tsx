import type { DefaultProps, ColorToken } from '@rui/types'
import React from 'react'
import { useId, useUncontrolled } from '@rui/hooks'

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
	const _id = useId(id)
	const [_checked, setUncontrolled] = useUncontrolled(!!defaultValue, checked)

	return (
		<ControlInput
			ref={ref}
			color={color}
			disabled={disabled}
			label={label}
			labelFor={_id}
			labelPosition={labelPosition}
			className={className}>
			<Box
				id={_id}
				type="checkbox"
				checked={_checked || !!indeterminate}
				onChange={event => {
					setUncontrolled(event.target.checked)
					onChange?.(event)
				}}
				$color={color}
				$error={!!error}
				disabled={disabled}
				{...otherProps}
			/>
			{indeterminate ? <Minus /> : <Check />}
		</ControlInput>
	)
})

Checkbox.displayName = 'Checkbox'
