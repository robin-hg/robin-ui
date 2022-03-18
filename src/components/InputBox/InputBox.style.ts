import styled, { css } from 'style'
import { BaseContainer, Paper, Typography } from 'index'

export const InputBoxContainer = styled(BaseContainer)`
	position: relative;
	display: inline-block;
	min-width: 15rem;
	padding-top: 2rem;

	&::before {
		content: '\\200b';
	}
`

interface BoxProps {
	$error: boolean
	$disabled: boolean
}

export const Box = styled(Paper)<BoxProps>`
	display: inline-flex;
	align-items: baseline;
	width: 100%;
	height: 1em;
	min-height: 3.5rem;
	padding: 0 1rem;
	color: ${props => props.theme.colors.text.primary};
	border: solid 0.1rem transparent;
	box-shadow: ${props => props.theme.generateShadow(1, props.theme.colors.shadow)};
	transition: all 100ms ease-out;

	@media (hover: hover) {
		&:hover {
			box-shadow: ${props => props.theme.generateShadow(2, props.theme.colors.shadow)};
		}
	}

	&:focus-within {
		border-color: ${props => props.theme.colors.primary.base};
		box-shadow: ${props => props.theme.generateShadow(2, props.theme.colors.shadow)};

		& + label {
			color: ${props => props.theme.colors.primary.base};
		}
	}

	${props =>
		props.$error &&
		css`
			border-color: ${props.theme.colors.error.base} !important;

			& + label {
				color: ${props.theme.colors.error.dark} !important;
			}
		`}

	${props =>
		props.$disabled &&
		css`
			color: ${props.theme.colors.text.disabled};
			background: ${props.theme.colors.paper.secondary} !important;
			border-color: transparent !important;
			box-shadow: ${props.theme.generateShadow(1, props.theme.colors.shadow)} !important;

			& + label {
				color: ${props.theme.colors.text.disabled} !important;
			}
		`}
`

export const Label = styled(Typography)`
	position: absolute;
	top: 0.5rem;
	left: 0;
	box-sizing: border-box;
	width: 100%;
	padding-left: 1rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	user-select: none;
	transition: all 200ms ease-out;
`
