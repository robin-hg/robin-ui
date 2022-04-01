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
	outlined?: boolean
	pill?: boolean
}

const Tag = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
	const { color = 'primary', outlined, pill, children, ...otherProps } = props

	return (
		<TagContainer ref={ref} $color={color} $outlined={!!outlined} $pill={!!pill} {...otherProps}>
			{children}
		</TagContainer>
	)
})

Tag.displayName = 'Tag'
export default Tag
