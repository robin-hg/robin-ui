import styled from 'style'
import { getColor, getColorVariant } from 'utils/color'

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

interface PageButtonProps {
	$active?: boolean
	$activeColor: string
}

export const PageButton = styled(Button)<PageButtonProps>`
	justify-content: center;
	min-width: 3.2rem;
	height: 3.2rem;
	padding: 0;
	font-size: 1.5rem;
	font-weight: 400;
	color: ${props => props.theme.colors.primary.dark};

	&& {
		border-color: ${props =>
			props.$active ? getColor(props.theme, props.$activeColor) : props.theme.colors.grey.light};
		border-width: 1px;
	}

	@media (hover: hover) {
		&:hover {
			border-color: ${props =>
				props.$active
					? getColor(props.theme, props.$activeColor)
					: getColorVariant(props.theme, props.$activeColor, 'extraLight')};
		}
	}
`

export const Elipsis = styled.div`
	width: 3.2rem;
	color: ${props => props.theme.colors.text.secondary};
	text-align: center;

	&::before {
		content: '...';
	}
`
