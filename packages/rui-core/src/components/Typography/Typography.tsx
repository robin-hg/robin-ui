import type { DefaultProps, SizeValue } from '@rui/types'
import React from 'react'

import { StyledText } from './Typography.style'

export interface Props extends DefaultProps<HTMLParagraphElement, 'size'> {
	size?: SizeValue
	fontWeight?: number
	bold?: boolean
	color?: string
	highlight?: string
	italic?: boolean
	underline?: boolean
	strikethrough?: boolean
	as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

type Variant = 'heading' | 'text' | 'label'

const variantComponentMap: Record<Variant, keyof JSX.IntrinsicElements> = {
	heading: 'h2',
	text: 'p',
	label: 'span'
}

const TypographyFactory = (variant: Variant) => {
	const Typography = React.forwardRef<HTMLParagraphElement, Props>((props, ref) => {
		const {
			as,
			size = 'md',
			fontWeight,
			bold,
			color = 'inherit',
			highlight = 'none',
			italic,
			underline,
			strikethrough,
			children,
			...otherProps
		} = props

		const decoration = `${underline ? 'underline' : ''} ${strikethrough ? 'line-through' : ''}`.trim() || 'none'
		const defaultComponent = as || variantComponentMap[variant]

		return (
			<StyledText
				ref={ref}
				as={defaultComponent}
				$variant={variant}
				$size={size}
				$fontWeight={fontWeight}
				$bold={!!bold}
				$color={color}
				$highlight={highlight}
				$italic={!!italic}
				$decoration={decoration || 'none'}
				{...otherProps}>
				{children}
			</StyledText>
		)
	})

	Typography.displayName = 'Typography'

	return Typography
}

export const Text = TypographyFactory('text')
export const Heading = TypographyFactory('heading')
export const Label = TypographyFactory('label')