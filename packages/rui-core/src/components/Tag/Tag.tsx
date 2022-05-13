import type { DefaultProps, ColorToken, Size, SizeValue } from '@rui/types'
import React from 'react'

import { TagContainer } from './Tag.style'

export interface Props extends DefaultProps<HTMLSpanElement, 'size'> {
	variant?: 'filled' | 'faded' | 'outlined'
	/**
	 * Tag color.
	 * @default primary
	 */
	color?: ColorToken
	/**
	 * Tag size.
	 * @default md
	 */
	size?: Size
	radius?: SizeValue
}

export const Tag = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
	const { variant = 'filled', color = 'primary', size = 'md', radius = 'sm', children, ...otherProps } = props

	return (
		<TagContainer ref={ref} $variant={variant} $color={color} $size={size} $radius={radius} {...otherProps}>
			{children}
		</TagContainer>
	)
})

Tag.displayName = 'Tag'
