import styled, { css } from 'style'

import { InputBox } from 'index'

interface StyledInputBoxProps {
	$open: boolean
}

export const StyledInputBox = styled(InputBox)<StyledInputBoxProps>`
	& > div {
		cursor: ${props => (props.disabled ? 'default' : 'pointer')};

		${props =>
			props.$open &&
			css`
				border-color: ${props.theme.colors.primary.base};
				box-shadow: ${props.theme.generateShadow(2, props.theme.colors.shadow)};

				& + label {
					color: ${props.theme.colors.primary.base};
				}
			`}
	}
`

interface ValueContainerProps {
	$open: boolean
}

export const ValueContainer = styled.div<ValueContainerProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	overflow: hidden;
	user-select: none;
	outline: none;

	& > p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	& > svg {
		transition: all 200ms ease-out;
		transform: rotate(${props => (props.$open ? 180 : 0)}deg);
	}
`
