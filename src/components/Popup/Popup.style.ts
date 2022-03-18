import styled from '../../style'

import Fade from '../Fade'

export const FadeContainer = styled(Fade)`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 5;
	width: 0;
	height: 0;
`

export const Arrow = styled.span`
	position: absolute;
	z-index: -1;
	width: 1rem;
	height: 1rem;

	&::before {
		display: block;
		margin: auto;
		content: '';
		border: solid 0.5rem ${props => props.theme.colors.paper.primary};
		border-radius: 0.1rem;
		transform: rotate(45deg);
	}
`
