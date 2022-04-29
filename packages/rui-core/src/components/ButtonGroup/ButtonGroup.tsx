import type { DefaultProps, ColorToken, ConstrainedSize, SizeValue } from '@rui/types'
import React, { useMemo } from 'react'
import { ButtonGroupContainer } from './ButtonGroup.style'

export const ButtonGroupContext = React.createContext<{
	groupVariant?: 'filled' | 'outlined' | 'text'
	groupColor?: string
	groupSize?: ConstrainedSize
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'size'> {
	variant?: 'filled' | 'outlined' | 'text'
	color?: ColorToken
	size?: ConstrainedSize
	borderRadius?: SizeValue
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { variant = 'filled', color = 'primary', size = 'md', borderRadius = 'sm', children, ...otherProps } = props
	const ctxValue = useMemo(
		() => ({ groupVariant: variant, groupColor: color, groupSize: size }),
		[variant, color, size]
	)

	return (
		<ButtonGroupContext.Provider value={ctxValue}>
			<ButtonGroupContainer ref={ref} $borderRadius={borderRadius} {...otherProps}>
				{children}
			</ButtonGroupContainer>
		</ButtonGroupContext.Provider>
	)
})

ButtonGroup.displayName = 'ButtonGroup'
