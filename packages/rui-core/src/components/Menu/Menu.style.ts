import styled from '@rui/styles'
import { Floating } from '../Floating'

interface MenuProps {
	$minWidth: string
	$maxHeight: string
}

export const StyledMenu = styled(Floating)<MenuProps>(({ theme, $minWidth, $maxHeight }) => ({
	minWidth: $minWidth,
	maxHeight: $maxHeight,
	padding: theme.spacing.xs,
	overflow: 'auto',
	outline: 'none'
}))
