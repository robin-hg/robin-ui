import styled, { css } from 'style'
import { getColor } from 'utils/color'

interface CircleProps {
	$color: string
	$checked: boolean
	$error: boolean
	$disabled: boolean
}

export const Circle = styled.span<CircleProps>`
	position: relative;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;
	overflow: hidden;
	border: solid 0.1rem transparent;
	border-radius: 100%;
	outline: none;
	transition: all 200ms ease-out;

	@media (hover: hover) {
		&:hover {
			box-shadow: ${props => props.theme.generateShadow(2, props.theme.colors.shadow, false)};
		}
	}

	&:active {
		box-shadow: ${props => props.theme.generateShadow(3, props.theme.colors.shadow, false)};
	}

	&:focus-visible {
		box-shadow: ${props => props.theme.generateShadow(2, props.theme.colors.shadow, false)};
	}

	${props => {
		const borderColor = props.$error ? 'error' : props.$checked ? props.$color : 'grey'

		return css`
			border-color: ${getColor(props.theme, borderColor)};

			&::before {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 1rem;
				height: 1rem;
				content: '';
				background: ${getColor(props.theme, borderColor)};
				border-radius: 100%;
				transform: translate(-50%, -50%) scale(${props.$checked ? 1 : 0});
				transition: all 200ms ease-out;
			}
		`
	}}

	${props =>
		props.$disabled &&
		css`
			border-color: ${props.theme.colors.grey.base} !important;
			box-shadow: none !important;

			&::before {
				background: ${props.theme.colors.grey.base} !important;
			}
		`}

	& > input {
		position: absolute !important;
		width: 1px;
		height: 1px;
		overflow: hidden;
		opacity: 0;
	}
`
