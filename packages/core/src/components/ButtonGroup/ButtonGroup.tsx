import type { DefaultProps, ColorToken, Size, SizeValue } from '@robin-ui/types'
import React, { useMemo } from 'react'
import { ButtonGroupContainer } from './ButtonGroup.style'

export const ButtonGroupContext = React.createContext<{
	groupVariant?: 'filled' | 'faded' | 'outlined' | 'text'
	groupColor?: string
	groupSize?: Size
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'size'> {
	variant?: 'filled' | 'faded' | 'outlined' | 'text'
	color?: ColorToken
	size?: Size
	radius?: SizeValue
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		variant = 'filled',
		color = 'primary',
		size = 'md',
		radius = 'sm',
		children,
		...otherProps
	} = props

	const ctxValue = useMemo(
		() => ({ groupVariant: variant, groupColor: color, groupSize: size }),
		[variant, color, size]
	)

	return (
		<ButtonGroupContainer ref={ref} $radius={radius} {...otherProps}>
			<ButtonGroupContext.Provider value={ctxValue}>{children}</ButtonGroupContext.Provider>
		</ButtonGroupContainer>
	)
})

ButtonGroup.displayName = 'ButtonGroup'
