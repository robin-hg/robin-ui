import styled from '@rui/styles'
import type { Placement } from '@popperjs/core'

interface PopperElementContainerProps {
	$placement: Placement
	$withArrow: boolean
}

export const PopperElementContainer = styled.div<PopperElementContainerProps>(
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
					paddingBottom: '0.8rem'
				}
			case 'right':
			case 'right-end':
			case 'right-start':
				return {
					paddingLeft: '0.8rem'
				}
			case 'bottom':
			case 'bottom-end':
			case 'bottom-start':
				return {
					paddingTop: '0.8rem'
				}
			case 'left':
			case 'left-end':
			case 'left-start':
				return {
					paddingRight: '0.8rem'
				}
		}
	}
)
