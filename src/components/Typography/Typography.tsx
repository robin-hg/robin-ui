import React from 'react'
import { parseSize } from 'utils'

import { H1, H2, H3, H4, H5, H6, Subtitle1, Subtitle2, Body1, Body2, Caption } from './Typography.style'

export interface Props extends RobinUI.StandardProps<HTMLParagraphElement> {
	/**
	 * Text variant.
	 * @default body1
	 */
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption'
	fontSize?: number | string
	fontWeight?: number
	bold?: boolean
	/**
	 * Text color.
	 * @default text
	 */
	color?: string
	highlight?: string
	italic?: boolean
	underline?: boolean
	strikethrough?: boolean
	component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const Typography = React.forwardRef<HTMLParagraphElement, Props>((props, ref) => {
	const {
		component,
		variant = 'body1',
		fontSize,
		fontWeight,
		bold,
		color = 'text',
		highlight,
		italic,
		underline,
		strikethrough,
		children,
		...otherProps
	} = props

	const Component = (() => {
		switch (variant) {
			case 'h1':
				return H1
			case 'h2':
				return H2
			case 'h3':
				return H3
			case 'h4':
				return H4
			case 'h5':
				return H5
			case 'h6':
				return H6
			case 'subtitle1':
				return Subtitle1
			case 'subtitle2':
				return Subtitle2
			case 'body1':
				return Body1
			case 'body2':
				return Body2
			case 'caption':
				return Caption
			default:
				return Body1
		}
	})()

	return (
		<Component
			ref={ref}
			as={component}
			$fontSize={fontSize ? parseSize(fontSize) : undefined}
			$fontWeight={fontWeight}
			$bold={!!bold}
			$color={color}
			$highlight={highlight}
			$italic={!!italic}
			$decoration={underline ? 'underline' : strikethrough ? 'line-through' : 'none'}
			{...otherProps}>
			{children}
		</Component>
	)
})

Typography.displayName = 'Typography'
Typography.defaultProps = {
	color: 'text',
	variant: 'body1'
}
export default Typography
