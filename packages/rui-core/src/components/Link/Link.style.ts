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
	outline: 'none',
	outlineOffset: '0.1rem',
	cursor: 'pointer',
	transition: theme.fn.getTransition(),
	'&::before': {
		content: '"\\200b"'
	},
	'&:hover': {
		color: theme.fn.getColorTint($color, 'surface.onBase', 'hover'),
		textDecorationColor: 'currentColor'
	},
	'&:focus-visible': {
		color: theme.fn.getColorTint($color, 'surface.onBase', 'hover'),
		outline: 'auto'
	},
	'&:active': {
		color: theme.fn.getColorTint($color, 'surface.onBase', 'active')
	},
	'&[disabled]': {
		color: `${theme.fn.getColorAlpha('surface.onBase', 'disabledOnBase')} !important`,
		textDecoration: 'none !important',
		cursor: 'default'
	}
}))
