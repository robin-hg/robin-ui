import styled from '@rui/style'

interface AutoResizerContainerProps {
	$width: string
	$height: string
	$timeout: number
}

export const AutoResizerContainer = styled.span<AutoResizerContainerProps>`
	display: inline-block;
	width: ${props => props.$width};
	height: ${props => props.$height};
	overflow: hidden;
	transition: all ${props => props.$timeout}ms ease-out;
`

export const HiddenContent = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	display: flex;
	visibility: hidden;
`
