import styled from '../../style'

import { Popup } from 'index'

interface MenuProps {
	$width: string
	$maxHeight: string
}

export const StyledMenu = styled(Popup)<MenuProps>`
	box-sizing: border-box;
	min-width: ${props => props.$width};
	max-height: ${props => props.$maxHeight};
	overflow: auto;
	border-color: ${props => props.theme.colors.grey.base};
`
