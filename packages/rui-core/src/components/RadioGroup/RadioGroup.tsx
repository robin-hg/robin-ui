import type { DefaultProps } from '@rui/types'
import React, { useMemo, useState } from 'react'
import { useId } from '@rui/hooks'

import { InputWrapper } from '../InputWrapper'
import { RadioContainer } from './RadioGroup.style'

export const RadioGroupContext = React.createContext<{
	error?: boolean
	disabled?: boolean
	value?: string | number
	onChange?: (value?: string | number) => void
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'onChange' | 'wrap'> {
	// InputWrapper props
	label?: string
	description?: React.ReactNode
	error?: boolean
	errorMessage?: React.ReactNode
	required?: boolean
	// RadioGroup props
	direction?: React.CSSProperties['flexDirection']
	value?: string | number
	defaultValue?: string | number
	onChange?: (value?: string | number) => void
}

export const RadioGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		label,
		description,
		error,
		errorMessage,
		required,
		direction = 'row',
		disabled,
		value,
		defaultValue,
		onChange,
		id,
		className,
		children,
		...otherProps
	} = props
	const labelId = useId()

	const [uncontrolled, setUncontrolled] = useState(defaultValue)
	const isUncontrolled = value === undefined
	const _value = isUncontrolled ? uncontrolled : value

	const ctxValue = useMemo(
		() => ({
			error,
			disabled,
			value: _value,
			onChange: (newValue?: string | number) => {
				if (isUncontrolled) {
					setUncontrolled(newValue)
				}
				onChange?.(newValue)
			}
		}),
		[_value, onChange]
	)

	return (
		<RadioGroupContext.Provider value={ctxValue}>
			<InputWrapper
				id={id}
				label={label}
				labelId={labelId}
				description={description}
				error={error}
				errorMessage={errorMessage}
				required={required}
				disabled={disabled}
				className={className}>
				<RadioContainer
					ref={ref}
					direction={direction}
					role="radiogroup"
					aria-labelledby={labelId}
					{...otherProps}>
					{children}
				</RadioContainer>
			</InputWrapper>
		</RadioGroupContext.Provider>
	)
})

RadioGroup.displayName = 'RadioGroup'
