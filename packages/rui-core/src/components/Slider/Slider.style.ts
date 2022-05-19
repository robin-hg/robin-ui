import type { ColorToken, SizeValue } from '@rui/theme'
import styled from '@rui/styles'

interface SliderContainerProps {
	$active: boolean
}

export const SliderContainer = styled.div<SliderContainerProps>(
	({ theme }) => ({
		position: 'relative',
		padding: `calc(${theme.size.xs} / 2) 0`,
		cursor: 'pointer',
		userSelect: 'none',
		touchAction: 'none',
		'&[disabled]': {
			cursor: 'default',
			'& > div:first-of-type > div': {
				background: theme.fn.getModifiedColor('surface', 'surface.onVariant', 'fadedOnBase')
			}
		}
	}),
	({ $active }) =>
		$active && {
			'& > div:first-of-type > div': {
				transition: 'none'
			}
		}
)

interface SliderThumbProps {
	$color: ColorToken
	$size: SizeValue
	$error: boolean
	$disabled: boolean
}

export const SliderThumb = styled.div<SliderThumbProps>(
	({ theme, $color, $size, $disabled }) => ({
		position: 'absolute',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: theme.fn.getSize($size, theme.size),
		height: theme.fn.getSize($size, theme.size),
		borderRadius: theme.radius.xl,
		background: $disabled
			? theme.fn.getModifiedColor('surface', 'surface.onVariant', 'fadedOnBase')
			: theme.fn.getOnColor($color),
		transition: theme.fn.getTransition(),
		border: `0.1rem solid ${theme.palette.outline}`,
		outline: '0.2rem solid transparent',
		'&:hover': {
			background: theme.fn.getModifiedColor('surface', $color, 'hover'),
			borderColor: theme.fn.getColor($color)
		},
		'&:focus-visible': {
			borderColor: theme.fn.getColor($color),
			outlineColor: theme.fn.getColor($color)
		}
	}),
	({ theme, $color, $error }) => {
		const color = $error ? 'critical.variant' : $color
		const onColor = theme.fn.getOnColor(color)
		const borderColor = $error ? 'critical' : color

		return {
			background: theme.fn.getColor($error ? color : 'surface'),
			borderColor: theme.fn.getColor($error ? borderColor : 'outline'),
			'&:hover': {
				background: $error
					? theme.fn.getModifiedColor(color, onColor, 'hover')
					: theme.fn.getModifiedColor('surface', color, 'hover'),
				borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'hover')
			},
			'&:focus-visible': {
				borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'focus'),
				outlineColor: theme.fn.getColor($color)
			},
			'&:active': {
				background: $error
					? theme.fn.getModifiedColor(color, onColor, 'active')
					: theme.fn.getModifiedColor('surface', color, 'active'),
				borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'active')
			}
		}
	},
	({ theme, $disabled }) =>
		$disabled && {
			background: `${theme.fn.getModifiedColor('surface', 'surface.onBase', 'fadedBase')} !important`,
			borderColor: `${theme.fn.getColor('outline')} !important`
		}
)
