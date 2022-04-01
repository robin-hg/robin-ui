import styled from '@rui/style'

export const StyledInput = styled.input`
	height: 100%;
	padding: 0;
	font-size: ${props => props.theme.typography.fontSizes.body};
	color: inherit;
	text-overflow: ellipsis;
	white-space: nowrap;
	background: none;
	border: none;
	outline: none;
`
