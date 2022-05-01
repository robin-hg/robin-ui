import type { ColorToken, ConstrainedSize, SizeValue } from '@rui/theme'
import styled from '@rui/styles'
import { DynamicResizer } from '../DynamicResizer'

interface StyledButtonProps {
	$variant: 'filled' | 'outlined' | 'text'
	$size: ConstrainedSize
	$color: ColorToken
	$borderRadius: SizeValue
}

export const StyledButton = styled.button<StyledButtonProps>(
	({ theme, $size, $borderRadius }) => ({
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
		border: 'solid 0.1rem transparent',
		borderRadius: theme.fn.getSize($borderRadius, theme.borderRadius),
		outline: '0.2rem solid transparent',
		outlineOffset: '0.2rem',
		transition: theme.fn.getTransition(['color', 'background-color', 'border-color'])
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
					outlineColor: theme.fn.getModifiedColor($color, theme.fn.getOnColor($color), 'focus')
				},
				'&:active': {
					background: theme.fn.getModifiedColor($color, theme.fn.getOnColor($color), 'active')
				},
				'&[disabled]': {
					color: `${theme.fn.getAlphaColor('surface.onBase', 'disabledOnBase')} !important`,
					background: `${theme.fn.getAlphaColor('surface.onBase', 'disabledBase')} !important`,
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
					color: `${theme.fn.getAlphaColor('surface.onBase', 'disabledOnBase')} !important`,
					background: `transparent !important`,
					borderColor: `${theme.fn.getAlphaColor('surface.onBase', 'disabledBase')} !important`,
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
					color: `${theme.fn.getAlphaColor('surface.onBase', 'disabledOnBase')} !important`,
					background: `transparent !important`,
					cursor: 'default !important'
				}
			}
		}[$variant]),
	({ theme, $size }) =>
		({
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
