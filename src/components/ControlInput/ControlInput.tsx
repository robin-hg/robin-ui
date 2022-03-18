import React from 'react'

import { Typography } from 'index'

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
			<Control $labelPosition={labelPosition}>{children}</Control>
			{label && <Typography component="span">{label}</Typography>}
		</ControlInputContainer>
	)
})

ControlInput.displayName = 'ControlInput'
export default ControlInput
