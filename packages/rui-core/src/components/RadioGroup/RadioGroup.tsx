import type { DefaultProps } from '@rui/types'
import React, { useMemo } from 'react'
import { useId, useUncontrolled } from '@rui/hooks'

import { InputWrapper, type InputWrapperProps } from '../InputWrapper'
import { RadioContainer } from './RadioGroup.style'

export const RadioGroupContext = React.createContext<{
	name?: string
	error?: boolean
	disabled?: boolean
	value?: string | number
	onChange?: (value?: string | number) => void
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'onChange'>, InputWrapperProps {
	direction?: React.CSSProperties['flexDirection']
	value?: string | number
	defaultValue?: string | number
	onChange?: (value?: string | number) => void
}

export const RadioGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { error, direction = 'row', disabled, value, defaultValue, onChange, name, children, ...otherProps } = props
	const labelId = useId()
	const [_value, setUncontrolled] = useUncontrolled(defaultValue, value)

	const ctxValue = useMemo(
		() => ({
			name,
			error,
			disabled,
			value: _value,
			onChange: (newValue?: string | number) => {
				setUncontrolled(newValue)
				onChange?.(newValue)
			}
		}),
		[_value, name, error, disabled, onChange]
	)

	return (
		<RadioGroupContext.Provider value={ctxValue}>
			<InputWrapper labelId={labelId} error={error} {...otherProps}>
				<RadioContainer ref={ref} direction={direction} role="radiogroup" aria-labelledby={labelId}>
					{children}
				</RadioContainer>
			</InputWrapper>
		</RadioGroupContext.Provider>
	)
})

RadioGroup.displayName = 'RadioGroup'
