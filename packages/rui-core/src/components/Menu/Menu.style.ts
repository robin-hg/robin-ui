import styled from '@rui/styles'
import { Popper } from '../Popper'

interface MenuProps {
	$minWidth: string
	$maxHeight: string
}

export const StyledMenu = styled(Popper)<MenuProps>(({ theme, $minWidth, $maxHeight }) => ({
	minWidth: $minWidth,
	maxHeight: $maxHeight,
	padding: theme.spacing.xs,
	overflow: 'auto'
}))
