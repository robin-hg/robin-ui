import styled from '@rui/styles'
import { Popover } from '../Popover'

interface MenuProps {
	$minWidth: string
	$maxHeight: string
}

export const StyledMenu = styled(Popover)<MenuProps>(({ $minWidth, $maxHeight }) => ({
	minWidth: $minWidth,
	maxHeight: $maxHeight,
	overflow: 'auto'
}))
