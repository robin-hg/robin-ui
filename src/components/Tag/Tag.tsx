import React from 'react'

import { TagContainer } from './Tag.style'

export interface Props extends RobinUI.StandardProps<HTMLSpanElement, 'size'> {
	/**
	 * Tag color.
	 * @default primary
	 */
	color?: string
	/**
	 * Tag size.
	 * @default md
	 */
	size?: 'sm' | 'md'
	outlined?: boolean
	pill?: boolean
}

const Tag = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
	const { color = 'primary', size = 'md', outlined, pill, children, ...otherProps } = props

	return (
		<TagContainer ref={ref} $color={color} $size={size} $outlined={!!outlined} $pill={!!pill} {...otherProps}>
			{children}
		</TagContainer>
	)
})

Tag.displayName = 'Tag'
export default Tag
