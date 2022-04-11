import type { TransitionStatus } from 'react-transition-group'
import styled from '@rui/styles'

interface FadeContainerProps {
	$state: TransitionStatus
	$timeout: number
}

export const FadeContainer = styled.div<FadeContainerProps>(
	({ theme }) => ({
		width: '100%',
		height: '100%',
		transition: theme.fn.getTransition()
	}),
	({ $state }) => {
		switch ($state) {
			case 'entering':
			case 'entered':
				return {
					opacity: 1
				}
			case 'exiting':
			case 'exited':
			default:
				return {
					opacity: 0
				}
		}
	}
)
