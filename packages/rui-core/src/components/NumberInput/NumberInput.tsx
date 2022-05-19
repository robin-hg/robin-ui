import React, { useContext, useEffect, useState } from 'react'
import NumberFormat, { type NumberFormatProps } from 'react-number-format'
import { ChevronDown, ChevronUp } from '@rui/icons'

import { InputBox } from '../InputBox'
import { InputWrapperContext } from '../InputWrapper'
import { IconButton } from '../IconButton'

import { StepButtons } from './NumberInput.style'
import { clampNumber } from '@rui/utils'

export interface Props extends Omit<React.ComponentProps<typeof InputBox>, 'children' | 'onChange'> {
	placeholder?: string
	value?: string | number
	defaultValue?: string | number
	min?: number
	max?: number
	step?: number
	precision?: number
	showControl?: boolean
	showBigControl?: boolean

	// state props
	error?: boolean
	required?: boolean
	disabled?: boolean
	readOnly?: boolean

	// fn props
	onChange?: (values: { value: string; formattedValue: string }) => void

	// sub element props
	numberFormatProps?: NumberFormatProps
}

export const NumberInput = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		value,
		defaultValue,
		placeholder,
		min,
		max,
		step = 1,
		precision,
		showControl,
		showBigControl,
		rightAdornment,
		error: inputError,
		required: inputRequired,
		readOnly: inputReadOnly,
		disabled: inputDisabled,
		onChange,
		id,
		name,
		inputMode = 'decimal',
		numberFormatProps,
		...otherProps
	} = props
	const {
		labelFor,
		error: wrapperError,
		required: wrapperRequired,
		readOnly: wrapperReadOnly,
		disabled: wrapperDisabled
	} = useContext(InputWrapperContext)
	const [internalValue, setInternalValue] = useState(value?.toString() ?? defaultValue?.toString() ?? '')

	useEffect(() => {
		setInternalValue(value?.toString() ?? '')
	}, [value])

	const error = wrapperError || inputError
	const required = wrapperRequired || inputRequired
	const readOnly = wrapperReadOnly || inputReadOnly
	const disabled = wrapperDisabled || inputDisabled

	const handleStep = (direction: 'up' | 'down') => {
		const parsedNumber = parseFloat(internalValue ?? '0')
		const numberValue = isNaN(parsedNumber) ? 0 : parsedNumber
		const diff = direction === 'up' ? step : -step
		setInternalValue(clampNumber(numberValue + diff, min, max).toString())
	}

	return (
		<InputBox
			ref={ref}
			disabled={disabled}
			error={error}
			rightAdornment={
				<>
					{rightAdornment}
					{showControl && !showBigControl && (
						<StepButtons>
							<IconButton
								variant="text"
								size="xs"
								color="surface.onBase"
								onClick={() => handleStep('up')}>
								<ChevronUp />
							</IconButton>
							<IconButton
								variant="text"
								size="xs"
								color="surface.onBase"
								onClick={() => handleStep('down')}>
								<ChevronDown />
							</IconButton>
						</StepButtons>
					)}
				</>
			}
			{...otherProps}>
			<NumberFormat
				id={labelFor ?? id}
				inputMode={inputMode}
				name={name}
				value={internalValue}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				readOnly={readOnly}
				isNumericString
				onValueChange={values => {
					onChange?.({ value: values.value, formattedValue: values.formattedValue })
					setInternalValue(values.value)
				}}
				onBlur={() => {
					const parsedNumber = parseFloat(internalValue ?? '0')
					const numberValue = isNaN(parsedNumber) ? 0 : parsedNumber
					setInternalValue(clampNumber(numberValue, min, max).toString())
				}}
				decimalScale={precision}
				{...numberFormatProps}
			/>
		</InputBox>
	)
})

NumberInput.displayName = 'NumberInput'
