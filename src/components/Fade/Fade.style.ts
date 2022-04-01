import type { TransitionStatus } from 'react-transition-group'
import styled, { css } from '@rui/style'

interface FadeContainerProps {
	$state: TransitionStatus
	$timeout: number
}

export const FadeContainer = styled.div<FadeContainerProps>`
	width: 100%;
	height: 100%;
	transition: all ${props => props.$timeout}ms ease-out;

	${props => {
		switch (props.$state) {
			case 'entering':
			case 'entered':
				return css`
					opacity: 1;
				`
			case 'exiting':
			case 'exited':
			default:
				return css`
					opacity: 0;
				`
		}
	}}
`
