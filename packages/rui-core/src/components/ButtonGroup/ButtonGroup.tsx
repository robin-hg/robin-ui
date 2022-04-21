import type { DefaultProps } from '@rui/types'
import React from 'react'
import { ButtonGroupContainer } from './ButtonGroup.style'

export const ButtonGroupContext = React.createContext<{
	groupVariant?: 'filled' | 'outlined' | 'text'
	groupColor?: string
	groupSize?: 'sm' | 'md' | 'lg'
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'size'> {
	variant?: 'filled' | 'outlined' | 'text'
	color?: string
	size?: 'sm' | 'md' | 'lg'
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { variant = 'filled', color = 'primary', size = 'md', children, ...otherProps } = props

	return (
		<ButtonGroupContext.Provider value={{ groupVariant: variant, groupColor: color, groupSize: size }}>
			<ButtonGroupContainer ref={ref} {...otherProps}>
				{children}
			</ButtonGroupContainer>
		</ButtonGroupContext.Provider>
	)
})

ButtonGroup.displayName = 'ButtonGroup'
