import styled, { css } from '@rui/style'
import BaseContainer from '@rui/components/BaseContainer'

interface PaperContainerProps {
	$elevation: number
	$color: string
}

export const PaperContainer = styled(BaseContainer)<PaperContainerProps>`
	box-sizing: border-box;
	overflow: hidden;
	background: ${props =>
		props.$color === 'paper' ? props.theme.paper.base : props.theme.utils.getColor(props.$color)};
	border-radius: ${props => props.theme.borderRadius};
	transition: all 200ms ease-out;

	${props =>
		props.$elevation === 0
			? css`
					border: solid 0.1rem
						${props.$color === 'paper'
							? props.theme.paper.border
							: props.theme.utils.getColorVariant(props.$color, 4)};
			  `
			: css`
					box-shadow: ${props.theme.shadow.generateShadow(props.$elevation)};
			  `}
`
