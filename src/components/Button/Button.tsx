import React, { useContext } from 'react'
import { ButtonGroupContext } from '@rui/components/ButtonGroup'

import { Adornment, Content, StyledButton } from './Button.style'

export interface Props extends RobinUI.StandardProps<HTMLButtonElement, 'size' | 'type'> {
	/**
	 * Button variant
	 * @default contained
	 */
	variant?: 'contained' | 'outlined' | 'text'
	/**
	 * Button size
	 * @default md
	 */
	size?: 'sm' | 'md' | 'lg'
	/**
	 * Button color
	 * @default primary
	 */
	color?: string
	startAdornment?: any
	endAdornment?: React.ReactNode
	component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const {
		component,
		variant = 'contained',
		size = 'md',
		color = 'primary',
		startAdornment,
		endAdornment,
		disabled,
		onClick,
		children,
		...otherProps
	} = props
	const { groupVariant, groupColor, groupSize } = useContext(ButtonGroupContext)

	return (
		<StyledButton
			ref={ref}
			as={component}
			$variant={groupVariant || variant}
			$color={groupColor || color}
			$size={groupSize || size}
			type="button"
			onClick={event => {
				if (disabled) {
					event.preventDefault()
					return
				}
				onClick?.(event)
			}}
			disabled={disabled}
			tabIndex={disabled ? -1 : 0}
			{...otherProps}>
			<Content key={size}>
				{startAdornment && <Adornment $position={children ? 'start' : undefined}>{startAdornment}</Adornment>}
				{children && children}
				{endAdornment && <Adornment $position={children ? 'end' : undefined}>{endAdornment}</Adornment>}
			</Content>
		</StyledButton>
	)
})

Button.displayName = 'Button'
export default Button
