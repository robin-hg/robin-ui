import styled from '@rui/style'

export const StyledBaseContainer = styled.div`
	font-family: ${props => props.theme.typography.fontFamily};
	font-size: ${props => props.theme.typography.fontSizes.body};
	font-weight: ${props => props.theme.typography.fontWeights.body};
	color: ${props => props.theme.utils.getTextColor()};
`
