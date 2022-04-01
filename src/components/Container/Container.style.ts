import styled from '@rui/style'

interface StyledContainerProps {
	$maxWidth: string
}

export const StyledContainer = styled.div<StyledContainerProps>`
	box-sizing: content-box;
	max-width: ${props => props.$maxWidth};
	padding: 0 1.6rem;
	margin: 0 auto;
`
