import styled from '@rui/style'

import Button from '../Button'

interface PaginationContainerProps {
	$align: 'left' | 'right' | 'center'
}

export const PaginationContainer = styled.div<PaginationContainerProps>`
	display: flex;
	align-items: center;
	justify-content: ${props =>
		props.$align === 'left' ? 'flex-start' : props.$align === 'right' ? 'flex-end' : 'center'};

	& > *:not(:last-child) {
		margin-right: 0.8rem;
	}
`

export const PageButton = styled(Button)`
	justify-content: center;
	min-width: 3.2rem;
	height: 3.2rem;
	padding: 0;
	font-size: 1.5rem;
	font-weight: 400;
`

export const Elipsis = styled.div`
	width: 3.2rem;
	color: ${props => props.theme.typography.colors.light};
	text-align: center;

	&::before {
		content: '...';
	}
`
