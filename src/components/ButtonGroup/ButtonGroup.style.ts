import styled, { css } from '@rui/style'

interface ButtonGroupContainerProps {
	$variant: 'contained' | 'outlined' | 'text'
	$color: string
}

export const ButtonGroupContainer = styled.div<ButtonGroupContainerProps>`
	display: inline-block;
	overflow: hidden;

	& > button {
		border-radius: 0;

		&:first-child {
			border-top-left-radius: ${props => props.theme.borderRadius};
			border-bottom-left-radius: ${props => props.theme.borderRadius};
		}

		&:last-child {
			border-top-right-radius: ${props => props.theme.borderRadius};
			border-bottom-right-radius: ${props => props.theme.borderRadius};
		}

		&:not(:last-child) {
			margin-right: -0.1rem;
		}
	}

	${props => {
		switch (props.$variant) {
			case 'text':
			case 'contained':
			case 'outlined':
				return css`
					& > button:not(:first-child) {
						border-left: solid 0.1rem ${props.theme.utils.getColorVariant(props.$color, 2)};
					}
				`
			default:
				return css``
		}
	}}
`
