import type { DefaultProps, ColorToken } from '@rui/types'
import React from 'react'

import { TagContainer } from './Tag.style'

export interface Props extends DefaultProps<HTMLSpanElement, 'size'> {
	variant?: 'filled' | 'outlined'
	/**
	 * Tag color.
	 * @default primary
	 */
	color?: ColorToken
	/**
	 * Tag size.
	 * @default md
	 */
	size?: 'sm' | 'md' | 'lg'
}

export const Tag = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
	const { variant = 'filled', color = 'primary', size = 'md', children, ...otherProps } = props

	return (
		<TagContainer ref={ref} $variant={variant} $color={color} $size={size} {...otherProps}>
			{children}
		</TagContainer>
	)
})

Tag.displayName = 'Tag'
