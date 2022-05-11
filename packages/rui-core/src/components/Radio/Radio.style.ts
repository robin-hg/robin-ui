import styled from '@rui/styles'

interface CircleProps {
	checked: boolean
	$color: string
	$error: boolean
}

export const Circle = styled.input<CircleProps>(
	({ theme }) => ({
		appearance: 'none',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '1.8rem',
		height: '1.8rem',
		border: '0.1rem solid transparent',
		borderRadius: '100%',
		outline: '0.2rem solid transparent',
		outlineOffset: '0.2rem',
		transition: theme.fn.getTransition()
	}),
	({ theme, checked, $color, $error }) => {
		const color = $error ? (checked ? 'critical' : 'critical.variant') : $color
		const onColor = theme.fn.getOnColor(color)
		const borderColor = $error ? 'critical' : color

		return {
			background: checked || $error ? theme.fn.getColor(color) : 'transparent',
			borderColor: theme.fn.getColor(checked || $error ? borderColor : 'surface.onBase'),
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
			},
			'&::before': {
				content: '""',
				position: 'absolute',
				top: '50%',
				left: '50%',
				width: '0.8rem',
				height: '0.8rem',
				background: onColor,
				borderRadius: '100%',
				transform: `translate(-50%, -50%) scale(${checked ? 1 : 0})`,
				transition: theme.fn.getTransition()
			}
		}
	},
	({ theme }) => ({
		'&[disabled]': {
			background: `${theme.fn.getAlphaColor('surface.base', 'disabledBase')} !important`,
			borderColor: `${theme.fn.getAlphaColor('surface.onBase', 'disabledBase')} !important`,
			'&::before': {
				background: `${theme.fn.getAlphaColor('surface.onBase', 'disabledBase')} !important`
			}
		}
	})
)
