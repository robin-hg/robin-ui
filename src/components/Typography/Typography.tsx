import React from 'react'
import { parseSize } from '@rui/utils'

import { H1, H2, H3, H4, H5, H6, Subtitle, Body, Caption } from './Typography.style'

export interface Props extends RobinUI.StandardProps<HTMLParagraphElement> {
	/**
	 * Text variant.
	 * @default body
	 */
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption'
	fontSize?: number | string
	fontWeight?: number
	bold?: boolean
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
		variant = 'body',
		fontSize,
		fontWeight,
		bold,
		color = 'text.disabled',
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
			case 'subtitle':
				return Subtitle
			case 'body':
				return Body
			case 'caption':
				return Caption
			default:
				return Body
		}
	})()

	const decoration = `${underline ? 'underline' : ''} ${strikethrough ? 'line-through' : ''}`.trim()

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
			$decoration={decoration || 'none'}
			{...otherProps}>
			{children}
		</Component>
	)
})

Typography.displayName = 'Typography'
Typography.defaultProps = {
	color: 'text',
	variant: 'body'
}
export default Typography
