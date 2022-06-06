import type { ColorToken } from '@robin-ui/theme'
import styled from '@robin-ui/styles'

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
		'&::after': {
			content: '""',
			width: '1.2rem',
			height: '1.2rem',
			border: '0.1rem solid transparent',
			borderRadius: theme.radius.xl,
			transition: theme.fn.getTransition()
		}
	}),
	({ theme, checked, $color, $error }) => {
		const color = $error ? (checked ? 'critical' : 'critical.variant') : $color
		const onColor = theme.fn.getOnColor(color)
		const borderColor = $error ? 'critical' : color

		return {
			background:
				checked || $error ? theme.fn.getColor(color) : theme.fn.getAlphaColor('surface.onVariant', 'fadedBase'),
			borderColor: theme.fn.getColor(checked || $error ? borderColor : 'outline'),
			'::after': {
				background: onColor,
				transform: `translateX(${checked ? 8 : -8}px)`,
				borderColor: theme.fn.getColor(checked || $error ? borderColor : 'outline')
			},
			'&:hover': {
				'&, &::after': {
					borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'hover')
				}
			},
			'&:focus-visible': {
				outlineColor: theme.fn.getColor($color),
				'&, &::after': {
					borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'focus')
				}
			},
			'&:active': {
				'&, &::after': {
					borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'active')
				}
			}
		}
	},
	({ theme }) => ({
		'&[disabled]': {
			'&::after': {
				background: `${theme.fn.getAlphaColor('surface.onBase', 'fadedBase')} !important`,
				borderColor: `${theme.fn.getColor('outline')} !important`
			},
			background: `${theme.fn.getAlphaColor('surface.onBase', 'fadedBase')} !important`,
			borderColor: `${theme.fn.getAlphaColor('surface.onBase', 'fadedBase')} !important`
		}
	})
)
