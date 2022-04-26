import type { ColorToken, SizeValue } from '@rui/theme'
import styled from '@rui/styles'
import { get } from '@rui/utils'

interface StyledLinkProps {
	$size: SizeValue
	$color: ColorToken
	$underline: boolean
}

export const StyledLink = styled.a<StyledLinkProps>(({ theme, $size, $color, $underline }) => ({
	fontFamily: theme.typography.text.fontFamily,
	fontSize: get(theme.typography.text.fontSize, $size as string, $size as string),
	fontWeight: 'bold',
	color: theme.fn.getColor($color),
	textDecoration: $underline ? 'underline' : 'none',
	textDecorationThickness: '0.1rem',
	textUnderlineOffset: '0.2rem',
	textDecorationColor: 'transparent',
	borderRadius: theme.borderRadius.sm,
	outline: '0.2rem solid transparent',
	outlineOffset: '0.2rem',
	cursor: 'pointer',
	transition: theme.fn.getTransition('color', 'text-decoration-color'),
	'&::before': {
		content: '"\\200b"'
	},
	'&:hover': {
		color: theme.fn.getModifiedColor($color, theme.fn.getOnColor($color), 'hover'),
		textDecorationColor: 'currentColor'
	},
	'&:focus-visible': {
		color: theme.fn.getModifiedColor($color, theme.fn.getOnColor($color), 'hover'),
		outlineColor: 'currentColor'
	},
	'&:active': {
		color: theme.fn.getModifiedColor($color, theme.fn.getOnColor($color), 'active')
	},
	'&[disabled]': {
		color: `${theme.fn.getAlphaColor('surface.onBase', 'disabledOnBase')} !important`,
		textDecoration: 'none !important',
		cursor: 'default !important'
	}
}))
