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
		width: '1.8rem',
		height: '1.8rem',
		border: 'solid 0.1rem transparent',
		borderRadius: theme.borderRadius.sm,
		outline: '0.2rem solid transparent',
		outlineOffset: '0.2rem',
		transition: theme.fn.getTransition(['background', 'border-color']),
		'& + svg': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			pointerEvents: 'none',
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
			'& + svg': {
				color: onColor,
				opacity: checked ? 1 : 0
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
			'& + svg': {
				color: `${theme.fn.getAlphaColor('surface.onBase', 'disabledOnBase')} !important`
			},
			background: `${theme.fn.getAlphaColor('surface.base', 'disabledBase')} !important`,
			borderColor: `${theme.fn.getAlphaColor('surface.onBase', 'disabledBase')} !important`
		}
	})
)
