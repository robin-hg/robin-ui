import React, { useMemo } from 'react'
import { useId } from '@rui/hooks'

import { InputWrapper } from '../InputWrapper'
import { RadioContainer } from './RadioGroup.style'

export const RadioGroupContext = React.createContext<{
	value?: string | number
	onChange?: (value: string | number) => void
}>({})

export interface Props extends Omit<React.ComponentProps<typeof InputWrapper>, 'onChange'> {
	direction?: React.CSSProperties['flexDirection']
	value?: string | number
	onChange?: (value: string | number) => void
}

export const RadioGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { direction = 'row', value, onChange, children, ...otherProps } = props
	const id = useId()
	const ctxValue = useMemo(() => ({ value, onChange }), [value, onChange])

	return (
		<RadioGroupContext.Provider value={ctxValue}>
			<InputWrapper ref={ref} labelId={id} {...otherProps}>
				<RadioContainer direction={direction} role="radiogroup" aria-labelledby={id}>
					{children}
				</RadioContainer>
			</InputWrapper>
		</RadioGroupContext.Provider>
	)
})

RadioGroup.displayName = 'RadioGroup'
