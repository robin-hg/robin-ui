import styled, { css } from '@rui/style'

import InputBox from '@rui/components/InputBox'

interface StyledInputBoxProps {
	$open: boolean
}

export const StyledInputBox = styled(InputBox)<StyledInputBoxProps>`
	& > div {
		cursor: ${props => (props.disabled ? 'default' : 'pointer')};
	}

	${props =>
		props.$open &&
		css`
			& > div {
				border-color: ${props.theme.colors.primary[5]};

				& > div:last-child > svg {
					transition: all 200ms ease-out;
					transform: rotate(${props.$open ? 180 : 0}deg);
				}
			}

			& > label {
				color: ${props.theme.colors.primary[5]};
			}
		`}
`

export const ValueContainer = styled.input`
	height: 100%;
	padding: 0;
	overflow: hidden;
	font-size: ${props => props.theme.typography.fontSizes.body};
	color: inherit;
	text-overflow: ellipsis;
	white-space: nowrap;
	pointer-events: none;
	user-select: none;
	background: none;
	border: none;
	outline: none;
`

export const NativeSelect = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding-right: 3.6rem;
	padding-left: 1.2rem;
	overflow: hidden;
	font-size: ${props => props.theme.typography.fontSizes.body};
	color: inherit;
	text-overflow: ellipsis;
	white-space: nowrap;
	background: none;
	border: none;
	outline: none;
	appearance: none;

	& > option {
		background: ${props => props.theme.paper.base};
	}
`
