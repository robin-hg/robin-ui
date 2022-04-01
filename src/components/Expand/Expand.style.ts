import styled from '@rui/style'

interface ExpandProps {
	$open: boolean
	$height: string
	$timeout: number
}

export const ExpandContainer = styled.div<ExpandProps>`
	height: ${props => (props.$open ? props.$height : 0)};
	overflow: hidden;
	transition: all ${props => props.$timeout}ms ease-out;
`
