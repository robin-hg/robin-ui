import styled from 'style'

export const StyledBaseContainer = styled.div`
	font-family: ${props => props.theme.typography.fontFamily};
	font-size: ${props => props.theme.typography.fontSizes.body1};
	font-weight: ${props => props.theme.typography.fontWeights.body};
	color: ${props => props.theme.colors.text.primary};
`
