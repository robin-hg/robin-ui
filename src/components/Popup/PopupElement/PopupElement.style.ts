import styled, { css } from '@rui/style'
import type { Placement } from '@popperjs/core'

import { Arrow } from '../Popup.style'

interface PopupElementContainerProps {
	$placement: Placement
	$withArrow: boolean
}

export const PopupElementContainer = styled.div<PopupElementContainerProps>`
	max-width: calc(100vw - 3.2rem);
	height: auto;

	${props => {
		if (props.$withArrow) {
			switch (props.$placement) {
				case 'top':
				case 'top-end':
				case 'top-start':
					return css`
						padding-bottom: 0.8rem;

						& ${Arrow} {
							bottom: 0.3rem;
							transform: translateY(50%);
						}
					`
				case 'right':
				case 'right-end':
				case 'right-start':
					return css`
						padding-left: 0.8rem;

						& ${Arrow} {
							left: 0.3rem;
							transform: translateX(-50%);
						}
					`
				case 'bottom':
				case 'bottom-end':
				case 'bottom-start':
					return css`
						padding-top: 0.8rem;

						& ${Arrow} {
							top: 0.3rem;
							transform: translateY(-50%);
						}
					`
				case 'left':
				case 'left-end':
				case 'left-start':
					return css`
						padding-right: 0.8rem;

						& ${Arrow} {
							right: 0.3rem;
							transform: translateX(50%);
						}
					`
			}
		}
	}}
`
