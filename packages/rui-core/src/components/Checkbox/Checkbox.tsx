import type { DefaultProps, ColorToken } from '@rui/types'
import React, { useRef } from 'react'
import { useId, useIsomorphicLayoutEffect, useUncontrolled } from '@rui/hooks'

import { ControlInput } from '../ControlInput'

import { Box } from './Checkbox.style'
import { Check, Minus } from '@rui/icons'

export interface Props extends DefaultProps<HTMLInputElement, 'children' | 'label' | 'defaultValue'> {
	checked?: boolean
	defaultValue?: boolean
	color?: ColorToken
	label?: number | string
	labelPosition?: 'left' | 'right'

	// state props
	indeterminate?: boolean
	error?: boolean

	// fn props
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
	const boxRef = useRef<HTMLInputElement>(null)
	const [_checked, setUncontrolled] = useUncontrolled(!!defaultValue, checked)

	useIsomorphicLayoutEffect(() => {
		if (boxRef.current) {
			boxRef.current.indeterminate = !!indeterminate
		}
	}, [indeterminate])

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
				ref={boxRef}
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
