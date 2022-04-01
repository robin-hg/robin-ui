import React from 'react'

import { InputBoxContainer, Box, Content, Label, Message, Adornment } from './InputBox.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'label' | 'wrap'> {
	label?: string
	labelId?: string
	required?: boolean
	error?: boolean
	disabled?: boolean
	errorMessage?: React.ReactNode
	infoMessage?: React.ReactNode
	startAdornment?: React.ReactNode
	endAdornment?: React.ReactNode
	boxProps?: RobinUI.StandardProps<HTMLDivElement>
}

const InputBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		label,
		labelId,
		required,
		error,
		disabled,
		errorMessage,
		infoMessage,
		startAdornment,
		endAdornment,
		boxProps,
		children,
		...otherProps
	} = props

	const message = error ? errorMessage : infoMessage

	return (
		<InputBoxContainer ref={ref} $error={!!error} $disabled={!!disabled} {...otherProps}>
			{label && (
				<Label component="label" variant="caption" fontWeight={500} htmlFor={labelId} $required={!!required}>
					{label}
				</Label>
			)}
			<Box data-rui-element="input-box" elevation={0} {...boxProps}>
				{startAdornment && <Adornment>{startAdornment}</Adornment>}
				<Content>{children}</Content>
				{endAdornment && <Adornment>{endAdornment}</Adornment>}
			</Box>
			{message && (
				<Message variant="caption" fontWeight={500}>
					{message}
				</Message>
			)}
		</InputBoxContainer>
	)
})

InputBox.displayName = 'InputBox'
export default InputBox
