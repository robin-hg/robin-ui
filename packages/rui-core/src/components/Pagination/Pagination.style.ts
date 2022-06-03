import styled from '@rui/styles'

import { IconButton } from '../IconButton'

interface PaginationContainerProps {
	$align: 'left' | 'right' | 'center'
}

export const PaginationContainer = styled.div<PaginationContainerProps>(
	({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing.sm
	}),
	({ $align }) =>
		({
			left: {
				justifyContent: 'flex-start'
			},
			right: {
				justifyContent: 'flex-end'
			},
			center: {
				justifyContent: 'center'
			}
		}[$align])
)

export const PageButton = styled(IconButton)({
	padding: 0,
	fontWeight: 'normal',
	transition: 'none'
})
