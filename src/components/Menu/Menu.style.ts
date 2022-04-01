import styled from '@rui/style'
import Popup from '@rui/components/Popup'

interface MenuProps {
	$width: string
	$maxHeight: string
}

export const StyledMenu = styled(Popup)<MenuProps>`
	box-sizing: border-box;
	min-width: ${props => props.$width};
	max-height: ${props => props.$maxHeight};
	padding: 0.4rem;
	overflow: auto;
`
