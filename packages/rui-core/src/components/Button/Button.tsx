import type { DefaultProps, ColorToken, SizeValue, Size } from '@rui/types'
import React, { useContext } from 'react'
import { ButtonGroupContext } from '../ButtonGroup'

import { Item, Content, StyledButton } from './Button.style'

export interface Props extends DefaultProps<HTMLButtonElement, 'size' | 'type'> {
	/**
	 * Button variant
	 * @default filled
	 */
	variant?: 'filled' | 'faded' | 'outlined' | 'text'
	/**
	 * Button size
	 * @default md
	 */
	size?: Size
	radius?: SizeValue
	/**
	 * Button color
	 * @default primary
	 */
	color?: ColorToken
	leftAdornment?: React.ReactNode
	rightAdornment?: React.ReactNode
	disabled?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	as?: React.ElementType
}

export const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const {
		as,
		variant = 'filled',
		size = 'md',
		color = 'primary',
		radius = 'sm',
		leftAdornment,
		rightAdornment,
		disabled,
		onClick,
		children,
		...otherProps
	} = props
	const { groupVariant, groupColor, groupSize } = useContext(ButtonGroupContext)

	return (
		<StyledButton
			ref={ref}
			as={as}
			$variant={groupVariant ?? variant}
			$color={groupColor ?? color}
			$size={groupSize ?? size}
			$radius={radius}
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
			<Content key={size} disableResizeHeight>
				{leftAdornment && <Item $position={children ? 'start' : undefined}>{leftAdornment}</Item>}
				<Item>{children}</Item>
				{rightAdornment && <Item $position={children ? 'end' : undefined}>{rightAdornment}</Item>}
			</Content>
		</StyledButton>
	)
})

Button.displayName = 'Button'
