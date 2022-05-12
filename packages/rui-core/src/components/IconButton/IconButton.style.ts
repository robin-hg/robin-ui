import type { SizeValue } from '@rui/theme'
import styled from '@rui/styles'
import { Button } from '../Button'

interface StyledButtonProps {
	$size: SizeValue
}

export const StyledButton = styled(Button)<StyledButtonProps>(({ theme, $size }) => ({
	boxSizing: 'content-box',
	padding: theme.spacing.xs,
	height: theme.fn.getSize($size, theme.size),
	width: theme.fn.getSize($size, theme.size),
	minWidth: 0
}))
