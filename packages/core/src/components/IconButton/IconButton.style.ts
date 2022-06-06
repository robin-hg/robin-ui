import type { SizeValue } from '@robin-ui/theme'
import styled from '@robin-ui/styles'
import { Button } from '../Button'

const defaultSizes = {
	xs: '2rem',
	sm: '2.4rem',
	md: '2.8rem',
	lg: '3.6rem',
	xl: '4.8rem'
}

interface StyledButtonProps {
	$size: SizeValue
}

export const StyledButton = styled(Button)<StyledButtonProps>(({ theme, $size }) => ({
	padding: theme.spacing.xs,
	width: theme.fn.getSize($size, defaultSizes),
	height: theme.fn.getSize($size, defaultSizes),
	minWidth: theme.fn.getSize($size, defaultSizes),
	'& > div': {
		width: '100% !important',
		'& svg': {
			maxWidth: '100%',
			maxHeight: '100%'
		}
	}
}))
