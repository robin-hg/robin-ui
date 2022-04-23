import type { DefaultProps, ConstrainedSize, SizeValue } from '@rui/types'
import React from 'react'
import { ButtonGroupContainer } from './ButtonGroup.style'

export const ButtonGroupContext = React.createContext<{
	groupVariant?: 'filled' | 'outlined' | 'text'
	groupColor?: string
	groupSize?: ConstrainedSize
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'size'> {
	variant?: 'filled' | 'outlined' | 'text'
	color?: string
	size?: ConstrainedSize
	borderRadius?: SizeValue
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { variant = 'filled', color = 'primary', size = 'md', borderRadius = 'sm', children, ...otherProps } = props

	return (
		<ButtonGroupContext.Provider value={{ groupVariant: variant, groupColor: color, groupSize: size }}>
			<ButtonGroupContainer ref={ref} $borderRadius={borderRadius} {...otherProps}>
				{children}
			</ButtonGroupContainer>
		</ButtonGroupContext.Provider>
	)
})

ButtonGroup.displayName = 'ButtonGroup'
