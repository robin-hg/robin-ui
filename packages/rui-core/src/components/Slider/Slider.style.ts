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
	$active: boolean
	$color: ColorToken
	$size: SizeValue
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
		'&:focus-visible': {
			outlineColor: theme.fn.getColor($color)
		}
	}),
	({ theme, $color, $active }) =>
		$active && {
			outlineColor: theme.fn.getColor($color),
			transition: 'none'
		}
)
