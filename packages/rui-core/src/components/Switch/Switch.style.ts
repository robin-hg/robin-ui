import type { ColorToken } from '@rui/theme'
import styled from '@rui/styles'

interface BoxProps {
	checked: boolean
	$color: ColorToken
	$error: boolean
}

export const Box = styled.input<BoxProps>(
	({ theme }) => ({
		appearance: 'none',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '3.6rem',
		height: '1.8rem',
		border: '0.1rem solid transparent',
		borderRadius: theme.radius.xl,
		outline: '0.2rem solid transparent',
		outlineOffset: '0.2rem',
		transition: theme.fn.getTransition(),
		'&:active': {
			outlineOffset: '0.1rem'
		},
		'&::after': {
			content: '""',
			width: '1.2rem',
			height: '1.2rem',
			borderRadius: theme.radius.xl,
			transition: theme.fn.getTransition()
		}
	}),
	({ theme, checked, $color, $error }) => {
		const color = $error ? (checked ? 'critical' : 'critical.variant') : $color
		const onColor = theme.fn.getOnColor(color)
		const borderColor = $error ? 'critical' : color

		return {
			background: checked || $error ? theme.fn.getColor(color) : 'transparent',
			borderColor: theme.fn.getColor(checked || $error ? borderColor : 'surface.onBase'),
			'::after': {
				background: onColor,
				transform: `translateX(${checked ? 8 : -8}px)`
			},
			'&:hover': {
				background:
					checked || $error
						? theme.fn.getModifiedColor(color, onColor, 'hover')
						: theme.fn.getAlphaColor(color, 'hover'),
				borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'hover')
			},
			'&:focus-visible': {
				borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'focus'),
				outlineColor: theme.fn.getModifiedColor(borderColor, onColor, 'focus')
			},
			'&:active': {
				background:
					checked || $error
						? theme.fn.getModifiedColor(color, onColor, 'active')
						: theme.fn.getAlphaColor(color, 'active'),
				borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'active')
			}
		}
	},
	({ theme }) => ({
		'&[disabled]': {
			'&::after': {
				background: `${theme.fn.getAlphaColor('surface.onBase', 'fadedOnBase')} !important`
			},
			background: `${theme.fn.getAlphaColor('surface.base', 'fadedBase')} !important`,
			borderColor: `${theme.fn.getAlphaColor('surface.onBase', 'fadedBase')} !important`
		}
	})
)
