import styled from '@rui/styles'

import { Button } from '../Button'

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

export const PageButton = styled(Button)(({ theme }) => ({
	minWidth: theme.size.lg,
	height: theme.size.lg,
	padding: 0,
	fontWeight: 'normal'
}))

export const Elipsis = styled.div(({ theme }) => ({
	width: theme.size.lg,
	color: theme.palette.surface.onBase,
	textAlign: 'center',
	'&::before': {
		content: '"..."'
	}
}))
