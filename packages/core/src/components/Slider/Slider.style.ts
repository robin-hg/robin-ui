import type { ColorToken, Size } from '@robin-ui/theme'
import styled from '@robin-ui/styles'

const defaultThumbSizes = {
	xs: '1.2rem',
	sm: '1.6rem',
	md: '2rem',
	lg: '2.4rem',
	xl: '2.8rem'
}

interface SliderContainerProps {
	$active: boolean
	$size: Size
}

export const SliderContainer = styled.div<SliderContainerProps>(
	({ theme, $size }) => ({
		position: 'relative',
		padding: `calc(${theme.fn.getSize($size, defaultThumbSizes)} / 2) 0`,
		cursor: 'pointer',
		userSelect: 'none',
		touchAction: 'none'
	}),
	({ $active }) =>
		$active && {
			'& > div:first-of-type > div': {
				transition: 'none'
			}
		},
	({ theme }) => ({
		'&[disabled]': {
			cursor: 'default !important',
			'& > div:first-of-type > div': {
				background: `${theme.fn.getModifiedColor(
					'surface',
					'surface.onVariant',
					'fadedOnBase'
				)} !important`
			}
		}
	})
)

interface SliderThumbProps {
	$color: ColorToken
	$size: Size
	$error: boolean
}

export const SliderThumb = styled.div<SliderThumbProps>(
	({ theme, $size }) => ({
		position: 'absolute',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: theme.fn.getSize($size, defaultThumbSizes),
		height: theme.fn.getSize($size, defaultThumbSizes),
		borderRadius: theme.radius.xl,
		transition: theme.fn.getTransition(['background', 'border', 'outline']),
		border: `0.1rem solid ${theme.palette.outline}`,
		outline: '0.2rem solid transparent'
	}),
	({ theme, $color, $error }) => {
		const color = $error ? 'critical.variant' : $color
		const onColor = theme.fn.getOnColor(color)
		const borderColor = $error ? 'critical' : color

		return {
			background: onColor,
			borderColor: theme.fn.getColor($error ? borderColor : 'outline'),
			'&:hover': {
				borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'hover')
			},
			'&:focus-visible': {
				borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'focus'),
				outlineColor: theme.fn.getColor($color)
			},
			'&:active': {
				borderColor: theme.fn.getModifiedColor(borderColor, onColor, 'active')
			}
		}
	},
	({ theme }) => ({
		'&[disabled]': {
			background: `${theme.fn.getModifiedColor(
				'surface',
				'surface.onBase',
				'fadedBase'
			)} !important`,
			borderColor: `${theme.fn.getColor('outline')} !important`
		}
	})
)
