import styled from '@robin-ui/styles'
import { Popover } from '../Popover'

interface MenuProps {
	$minWidth: string | number
	$maxHeight: string | number
}

export const StyledMenu = styled(Popover)<MenuProps>(({ $minWidth, $maxHeight }) => ({
	minWidth: $minWidth,
	maxHeight: $maxHeight,
	overflow: 'auto'
}))
