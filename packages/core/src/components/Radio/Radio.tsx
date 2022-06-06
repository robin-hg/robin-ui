import type { DefaultProps, ColorToken } from '@robin-ui/types'
import React, { useContext } from 'react'
import { useId, useUncontrolled } from '@robin-ui/hooks'
import { RadioGroupContext } from '../RadioGroup'

import { ControlInput } from '../ControlInput'

import { Circle } from './Radio.style'

export interface Props extends DefaultProps<HTMLInputElement, 'children' | 'label' | 'defaultValue'> {
	label?: number | string
	labelPosition?: 'left' | 'right'
	color?: ColorToken
	value?: string | number
	checked?: boolean
	defaultValue?: boolean

	// state props
	error?: boolean

	// fn props
	onChange?: (checked: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
	const {
		label,
		labelPosition,
		color = 'primary',
		value,
		checked,
		defaultValue,
		error,
		required,
		readOnly,
		disabled,
		onChange,
		id,
		className,
		name,
		...otherProps
	} = props
	const {
		name: groupName,
		error: groupError,
		required: groupRequired,
		readOnly: groupReadOnly,
		disabled: groupDisabled,
		value: groupValue,
		onChange: groupOnChange
	} = useContext(RadioGroupContext)
	const _id = useId(id)
	const inGroup = !!groupOnChange
	const [_checked, setUncontrolled] = useUncontrolled(!!defaultValue, inGroup ? value === groupValue : checked)

	return (
		<ControlInput
			ref={ref}
			disabled={disabled}
			label={label}
			labelFor={_id}
			labelPosition={labelPosition}
			className={className}>
			<Circle
				id={_id}
				name={name ?? groupName}
				type="radio"
				checked={_checked}
				onChange={event => {
					if (inGroup) {
						groupOnChange(value)
					}
					setUncontrolled(event.target.checked)
					onChange?.(event)
				}}
				$color={color}
				$error={!!groupError || !!error}
				required={groupRequired || required}
				readOnly={groupReadOnly || readOnly}
				disabled={groupDisabled || disabled}
				{...otherProps}
			/>
		</ControlInput>
	)
})

Radio.displayName = 'Checkbox'
