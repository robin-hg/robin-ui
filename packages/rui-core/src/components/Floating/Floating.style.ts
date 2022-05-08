import styled from '@rui/styles'
import type { Placement } from '@floating-ui/react-dom'
import { Paper } from '../Paper'
import { Fade } from '../Transition'

export const FadeContainer = styled(Fade)({
	position: 'absolute',
	top: 0,
	left: 0,
	zIndex: 5,
	width: 0,
	height: 0
})

export const Arrow = styled.span(({ theme }) => ({
	position: 'absolute',
	zIndex: -1,
	width: '0.8rem',
	height: '0.8rem',
	'&::before': {
		display: 'block',
		margin: 'auto',
		content: '""',
		border: `0.4rem solid ${theme.palette.surface.base}`,
		borderRadius: '0.1rem',
		transform: 'rotate(45deg)'
	}
}))

interface FloatingElementProps {
	$placement: Placement
	$withArrow: boolean
}

export const FloatingElement = styled(Paper)<FloatingElementProps>(
	{
		maxWidth: 'calc(100vw - 3.2rem)',
		height: 'auto'
	},
	({ $withArrow, $placement }) => {
		if (!$withArrow) {
			return null
		}
		switch ($placement) {
			case 'top':
			case 'top-end':
			case 'top-start':
				return {
					paddingBottom: '0.8rem',
					'& div[data-element="arrow"]': {
						bottom: '0.3rem',
						transform: 'translateY(50%)'
					}
				}
			case 'right':
			case 'right-end':
			case 'right-start':
				return {
					paddingLeft: '0.8rem',
					'& div[data-element="arrow"]': {
						left: '0.3rem',
						transform: 'translateX(-50%)'
					}
				}
			case 'bottom':
			case 'bottom-end':
			case 'bottom-start':
				return {
					paddingTop: '0.8rem',
					'& div[data-element="arrow"]': {
						top: '0.3rem',
						transform: 'translateY(-50%)'
					}
				}
			case 'left':
			case 'left-end':
			case 'left-start':
				return {
					paddingRight: '0.8rem',
					'& div[data-element="arrow"]': {
						right: '0.3rem',
						transform: 'translateX(50%)'
					}
				}
		}
	}
)
