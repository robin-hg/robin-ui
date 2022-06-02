import type { SizeValue } from '@rui/theme'
import styled from '@rui/styles'
import { Button } from '../Button'

interface StyledButtonProps {
	$size: SizeValue
}

export const StyledButton = styled(Button)<StyledButtonProps>(({ theme, $size }) => ({
	boxSizing: 'content-box',
	padding: theme.spacing.xs,
	width: theme.fn.getSize($size, theme.size),
	height: theme.fn.getSize($size, theme.size),
	minWidth: 0,
	'& > div': {
		width: '100% !important',
		'& svg': {
			maxWidth: '100%',
			maxHeight: '100%'
		}
	}
}))
