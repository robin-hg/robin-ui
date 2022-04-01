import React from 'react'
import Typography from '@rui/components/Typography'

import { ControlInputContainer, Control } from './ControlInput.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'label'> {
	color?: string
	label?: number | string
	labelPosition?: 'left' | 'right'
	onChange?: () => void
}

const ControlInput = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { color = 'primary', label, labelPosition = 'right', children, disabled, onChange, ...otherProps } = props

	return (
		<ControlInputContainer
			ref={ref}
			component={label ? 'label' : 'span'}
			$labelPosition={labelPosition}
			$color={color}
			onClick={event => {
				event.stopPropagation()
				event.preventDefault()
				if (!disabled) {
					onChange?.()
				}
			}}
			disabled={disabled}
			{...otherProps}>
			<Control>{children}</Control>
			{label && (
				<Typography component="label" color={disabled ? 'text.disabled' : 'text'}>
					{label}
				</Typography>
			)}
		</ControlInputContainer>
	)
})

ControlInput.displayName = 'ControlInput'
export default ControlInput
