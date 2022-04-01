import styled, { css } from '@rui/style'
import Button from '@rui/components/Button'

interface MenuItemContainerProps {
	$active: boolean
	disabled: boolean
}

export const MenuItemContainer = styled(Button)<MenuItemContainerProps>`
	display: block;
	width: 100%;
	padding: 0.4rem 0.8rem;
	font-weight: 400;
	text-align: left;
	outline: none !important;

	&:after {
		content: none !important;
	}

	& > span {
		white-space: break-spaces;
	}

	${props =>
		!props.$active &&
		css`
			@media (hover: hover) {
				&:hover {
					background: ${props.theme.darkMode ? props.theme.colors.dark[5] : props.theme.colors.gray[0]};
				}
			}

			&:focus-visible {
				background: ${props.theme.darkMode ? props.theme.colors.dark[5] : props.theme.colors.gray[0]};
			}

			&:active {
				background: ${props.theme.darkMode ? props.theme.colors.dark[4] : props.theme.colors.gray[1]};
			}
		`}
`
