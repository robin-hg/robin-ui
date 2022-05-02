import type { DefaultProps } from '@rui/types'
import React, { useRef } from 'react'
import { useForceUpdate, useSize } from '@rui/hooks'

import { Box, Adornment } from './InputBox.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	active?: boolean
	error?: boolean
	disabled?: boolean
	leftAdornment?: React.ReactNode
	rightAdornment?: React.ReactNode
}

export const InputBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { active, error, disabled, leftAdornment, rightAdornment, children, ...otherProps } = props
	const leftAdornmentRef = useRef<HTMLSpanElement>(null)
	const rightAdornmentRef = useRef<HTMLSpanElement>(null)
	const leftAdornmentSize = useSize(leftAdornmentRef.current)
	const rightAdornmentSize = useSize(rightAdornmentRef.current)
	useForceUpdate(true)

	const state = disabled ? 'disabled' : error ? 'error' : active ? 'active' : 'none'

	return (
		<Box
			ref={ref}
			$state={state}
			$leftPadding={leftAdornmentSize?.width || 0}
			$rightPadding={rightAdornmentSize?.width || 0}
			{...otherProps}>
			{leftAdornment && (
				<Adornment ref={leftAdornmentRef} $position="left">
					{leftAdornment}
				</Adornment>
			)}
			{children}
			{rightAdornment && (
				<Adornment ref={rightAdornmentRef} $position="right">
					{rightAdornment}
				</Adornment>
			)}
		</Box>
	)
})

InputBox.displayName = 'InputBox'
