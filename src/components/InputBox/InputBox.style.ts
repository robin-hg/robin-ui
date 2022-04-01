import styled, { css } from '@rui/style'
import BaseContainer from '@rui/components/BaseContainer'
import Paper from '@rui/components/Paper'
import Typography from '@rui/components/Typography'

interface InputBoxContainerProps {
	$error: boolean
	$disabled: boolean
}

export const InputBoxContainer = styled(BaseContainer)<InputBoxContainerProps>`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	min-width: 20rem;
	padding-top: 2rem;

	&:focus-within {
		& > label {
			color: ${props => props.theme.colors.primary[5]};
		}
	}

	${props =>
		props.$error &&
		css`
			& > label,
			& > p {
				color: ${props.theme.colors.error[5]} !important;
			}
			& > div {
				border-color: ${props.theme.colors.error[5]} !important;
			}
		`}

	${props =>
		props.$disabled &&
		css`
			& > label,
			& > p {
				color: ${props.theme.typography.colors.light} !important;
			}
			& > div {
				color: ${props.theme.typography.colors.disabled} !important;
				background: ${props.theme.paper.disabled} !important;
				border-color: ${props.theme.paper.border} !important;

				& > *::placeholder {
					color: ${props.$disabled
						? props.theme.typography.colors.disabled
						: props.theme.typography.colors.light};
				}
			}
		`}
`

export const Box = styled(Paper)`
	position: relative;
	display: inline-flex;
	gap: 0.8rem;
	align-items: center;
	width: 100%;
	height: 1em;
	min-height: 3.5rem;
	padding: 0 1.2rem;
	color: ${props => props.theme.typography.colors.base};
	background: ${props => (props.theme.darkMode ? props.theme.paper.secondary : props.theme.paper.base)};
	outline: none;
	transition: all 100ms ease-out;

	&::before {
		margin-right: -0.8rem;
		content: '\\200b';
	}

	@media (hover: hover) {
		&:hover {
			border-color: ${props => props.theme.colors.primary[5]};
		}
	}

	&:focus-within {
		border-color: ${props => props.theme.colors.primary[5]};
	}
`

export const Content = styled.div`
	flex: 1;
	min-width: 0;
	height: 100%;
`

interface LabelProps {
	$required: boolean
}

export const Label = styled(Typography)<LabelProps>`
	position: absolute;
	top: 0.2rem;
	left: 0;
	box-sizing: border-box;
	width: 100%;
	padding: 0 1.2rem;
	overflow: hidden;
	color: ${props => props.theme.typography.colors.light};
	text-overflow: ellipsis;
	white-space: nowrap;
	transition: all 200ms ease-out;

	${props =>
		props.$required &&
		css`
			&:after {
				margin-left: 0.4rem;
				color: ${props.theme.colors.red[4]};
				content: '*';
			}
		`}
`

export const Message = styled(Typography)`
	box-sizing: border-box;
	width: 100%;
	padding: 0 1.2rem;
	margin-top: 0.4rem;
	overflow: hidden;
	color: ${props => props.theme.typography.colors.light};
	text-overflow: ellipsis;
	transition: all 200ms ease-out;
`

export const Adornment = styled.div`
	display: flex;

	&::before {
		content: '\\200b';
	}
`
