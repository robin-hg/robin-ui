import type { ColorToken, Size, SizeValue } from '@rui/theme'
import styled from '@rui/styles'
import { DynamicResizer } from '../DynamicResizer'

interface StyledButtonProps {
	$variant: 'filled' | 'faded' | 'outlined' | 'text'
	$size: Size
	$color: ColorToken
	$radius: SizeValue
}

export const StyledButton = styled.button<StyledButtonProps>(
	({ theme, $size, $radius }) => ({
		boxSizing: 'border-box',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: theme.spacing.sm,
		minWidth: '4rem',
		fontFamily: theme.typography.label.fontFamily,
		fontSize: theme.typography.text.fontSize[$size],
		fontWeight: theme.typography.label.fontWeight,
		textAlign: 'center',
		textDecoration: 'none',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		cursor: 'pointer',
		userSelect: 'none',
		border: '0.1rem solid transparent',
		borderRadius: theme.fn.getSize($radius, theme.radius),
		outline: '0.2rem solid transparent',
		outlineOffset: '0.2rem',
		transition: theme.fn.getTransition()
	}),
	({ theme, $variant, $color }) =>
		({
			filled: {
				color: theme.fn.getOnColor($color),
				background: theme.fn.getColor($color),
				'&:hover': {
					background: theme.fn.getModifiedColor($color, theme.fn.getOnColor($color), 'hover')
				},
				'&:focus-visible': {
					background: theme.fn.getModifiedColor($color, theme.fn.getOnColor($color), 'focus'),
					outlineColor: theme.fn.getColor($color)
				},
				'&:active': {
					background: theme.fn.getModifiedColor($color, theme.fn.getOnColor($color), 'active')
				},
				'&[disabled]': {
					color: `${theme.fn.getAlphaColor('surface.onBase', 'fadedOnBase')} !important`,
					background: `${theme.fn.getAlphaColor('surface.onBase', 'fadedBase')} !important`,
					cursor: 'default !important'
				}
			},
			faded: {
				color: theme.fn.getColor($color),
				background: theme.fn.getAlphaColor($color, 'fadedBase'),
				'&:hover': {
					background: theme.fn.getAlphaColor($color, 'hover')
				},
				'&:focus-visible': {
					background: theme.fn.getAlphaColor($color, 'hover'),
					outlineColor: theme.fn.getColor($color)
				},
				'&:active': {
					background: theme.fn.getAlphaColor($color, 'active')
				},
				'&[disabled]': {
					color: `${theme.fn.getAlphaColor('surface.onBase', 'fadedOnBase')} !important`,
					background: `${theme.fn.getAlphaColor('surface.onBase', 'fadedBase')} !important`,
					cursor: 'default !important'
				}
			},
			outlined: {
				color: theme.fn.getColor($color),
				background: 'transparent',
				borderColor: theme.fn.getColor($color),
				'&:hover': {
					background: theme.fn.getAlphaColor($color, 'hover')
				},
				'&:focus-visible': {
					background: theme.fn.getAlphaColor($color, 'focus'),
					outlineColor: theme.fn.getColor($color)
				},
				'&:active': {
					background: theme.fn.getAlphaColor($color, 'active')
				},
				'&[disabled]': {
					color: `${theme.fn.getAlphaColor('surface.onBase', 'fadedOnBase')} !important`,
					background: `transparent !important`,
					borderColor: `${theme.fn.getAlphaColor('surface.onBase', 'fadedBase')} !important`,
					cursor: 'default !important'
				}
			},
			text: {
				color: theme.fn.getColor($color),
				background: 'transparent',
				'&:hover': {
					background: theme.fn.getAlphaColor($color, 'hover')
				},
				'&:focus-visible': {
					background: theme.fn.getAlphaColor($color, 'focus'),
					outlineColor: theme.fn.getColor($color)
				},
				'&:active': {
					background: theme.fn.getAlphaColor($color, 'active')
				},
				'&[disabled]': {
					color: `${theme.fn.getAlphaColor('surface.onBase', 'fadedOnBase')} !important`,
					background: `transparent !important`,
					cursor: 'default !important'
				}
			}
		}[$variant]),
	({ theme, $size }) =>
		({
			xs: {
				height: '2.4rem',
				padding: theme.fn.getSpacing(['xs', 'xs'])
			},
			sm: {
				height: '3.2rem',
				padding: theme.fn.getSpacing(['xs', 'sm'])
			},
			md: {
				height: '4rem',
				padding: theme.fn.getSpacing(['xs', 'md'])
			},
			lg: {
				height: '4.8rem',
				padding: theme.fn.getSpacing(['sm', 'lg'])
			},
			xl: {
				height: '5.6rem',
				padding: theme.fn.getSpacing(['md', 'xl'])
			}
		}[$size])
)

export const Content = styled(DynamicResizer)(({ theme }) => ({
	'& > div': {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: theme.spacing.sm,
		overflow: 'hidden'
	}
}))

export const Item = styled.span({
	display: 'flex',
	alignItems: 'center',
	'&::before': {
		content: '"\\200b"'
	}
})
