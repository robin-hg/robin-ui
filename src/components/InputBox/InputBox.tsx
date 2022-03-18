import React from 'react'
import { Box, InputBoxContainer, Label } from './InputBox.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'label'> {
	label?: number | string
	labelId?: string
	error?: boolean
	disabled?: boolean
}

const InputBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { label, labelId, error, disabled, children, ...otherProps } = props

	return (
		<InputBoxContainer ref={ref} {...otherProps}>
			<Box data-rui-element="input-box" $error={!!error} $disabled={!!disabled}>
				{children}
			</Box>
			{label && (
				<Label component="label" variant="caption" fontSize={11} fontWeight={600} htmlFor={labelId}>
					{label}
				</Label>
			)}
		</InputBoxContainer>
	)
})

InputBox.displayName = 'InputBox'
export default InputBox
