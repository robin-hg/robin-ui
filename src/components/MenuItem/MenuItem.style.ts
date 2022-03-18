import styled, { css } from 'style'
import { getColorVariant } from 'utils/color'

import { Button } from 'index'

interface MenuItemContainerProps {
	$active: boolean
	$focused: boolean
	disabled: boolean
}

export const MenuItemContainer = styled(Button)<MenuItemContainerProps>`
	display: block;
	width: 100%;
	padding: 0.5rem 1rem;
	font-weight: ${props => (props.$active ? 600 : 400)};
	color: ${props => (props.$active ? props.theme.colors.primary.base : props.theme.colors.text.primary)};
	text-align: left;
	border-radius: 0;

	&:after {
		content: none !important;
	}

	& > span {
		white-space: break-spaces;
	}

	@media (hover: hover) {
		&:hover {
			color: ${props => props.theme.colors.primary.base};
			background: ${props => getColorVariant(props.theme, 'primary', 'extraLight')};
		}
	}

	&:focus {
		color: ${props => props.theme.colors.primary.base};
		background: ${props => getColorVariant(props.theme, 'primary', 'extraLight')};
	}

	${props =>
		props.$focused &&
		css`
			color: ${props.theme.colors.primary.base} !important;
			background: ${getColorVariant(props.theme, 'primary', 'extraLight')} !important;
		`}

	${props =>
		props.disabled &&
		css`
			color: ${props.theme.colors.text.disabled} !important;
			background: ${getColorVariant(props.theme, 'grey', 'extraLight')} !important;
		`}
`
