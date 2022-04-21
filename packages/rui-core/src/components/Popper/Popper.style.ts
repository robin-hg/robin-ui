import styled from '@rui/styles'
import type { Placement } from '@popperjs/core'

import { Fade } from '../Transition'

export const FadeContainer = styled(Fade)({
	position: 'absolute',
	top: 0,
	left: 0,
	zIndex: 5,
	width: 0,
	height: 0
})

interface ArrowProps {
	$placement: Placement
}

export const Arrow = styled.span<ArrowProps>(
	({ theme }) => ({
		position: 'absolute',
		zIndex: -1,
		width: '0.8rem',
		height: '0.8rem',
		'&::before': {
			display: 'block',
			margin: 'auto',
			content: '""',
			border: `solid 0.4rem ${theme.palette.surface.base}`,
			borderRadius: '0.1rem',
			transform: 'rotate(45deg)'
		}
	}),
	({ $placement }) => {
		switch ($placement) {
			case 'top':
			case 'top-end':
			case 'top-start':
				return {
					bottom: '0.3rem',
					transform: 'translateY(50%)'
				}
			case 'right':
			case 'right-end':
			case 'right-start':
				return {
					left: '0.3rem',
					transform: 'translateX(-50%)'
				}
			case 'bottom':
			case 'bottom-end':
			case 'bottom-start':
				return {
					top: '0.3rem',
					transform: 'translateY(-50%)'
				}
			case 'left':
			case 'left-end':
			case 'left-start':
				return {
					right: '0.3rem',
					transform: 'translateX(50%)'
				}
		}
	}
)
