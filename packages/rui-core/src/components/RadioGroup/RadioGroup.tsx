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

export interface Props extends Omit<React.ComponentProps<typeof InputWrapper>, 'onChange'> {
	direction?: React.CSSProperties['flexDirection']
	value?: string | number
	defaultValue?: string | number
	onChange?: (value?: string | number) => void
}

export const RadioGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { direction = 'row', error, disabled, value, defaultValue, onChange, children, ...otherProps } = props
	const id = useId()

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
			<InputWrapper ref={ref} labelId={id} error={error} disabled={disabled} {...otherProps}>
				<RadioContainer direction={direction} role="radiogroup" aria-labelledby={id}>
					{children}
				</RadioContainer>
			</InputWrapper>
		</RadioGroupContext.Provider>
	)
})

RadioGroup.displayName = 'RadioGroup'
