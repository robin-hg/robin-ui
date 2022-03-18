import React from 'react'
import { ButtonGroupContainer } from './ButtonGroup.style'

export const ButtonGroupContext = React.createContext<{
	groupVariant?: 'contained' | 'outlined' | 'text'
	groupColor?: string
	groupSize?: 'sm' | 'md' | 'lg'
}>({})

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'size'> {
	variant?: 'contained' | 'outlined' | 'text'
	color?: string
	size?: 'sm' | 'md' | 'lg'
}

const ButtonGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { variant = 'contained', color = 'primary', size = 'md', children, ...otherProps } = props

	return (
		<ButtonGroupContext.Provider value={{ groupVariant: variant, groupColor: color, groupSize: size }}>
			<ButtonGroupContainer ref={ref} $variant={variant} $color={color} {...otherProps}>
				{children}
			</ButtonGroupContainer>
		</ButtonGroupContext.Provider>
	)
})

ButtonGroup.displayName = 'ButtonGroup'
export default ButtonGroup
