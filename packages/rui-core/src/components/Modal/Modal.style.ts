import type { Size } from '@rui/theme'
import styled from '@rui/styles'
import { Paper } from '../Paper'

export const ModalContainer = styled.div({
	position: 'fixed',
	top: 0,
	left: 0,
	zIndex: 1000,
	width: '100%',
	height: '100%',
	overflow: 'auto',
	'& > div': {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center'
	}
})

interface ModalPaperProps {
	$size: Size | 'full'
}

export const ModalPaper = styled(Paper)<ModalPaperProps>(
	({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing.md,
		margin: theme.fn.getSpacing(['xl', 'md']),
		maxWidth: '100%',
		outline: 'none'
	}),
	({ $size }) =>
		({
			xs: { width: '32rem' },
			sm: { width: '36rem' },
			md: { width: '44rem' },
			lg: { width: '56rem' },
			xl: { width: '64rem' },
			full: {
				width: '100%',
				minHeight: '100vh',
				margin: 0,
				borderRadius: 0
			}
		}[$size])
)

export const Backdrop = styled.div({
	position: 'fixed',
	top: 0,
	left: 0,
	zIndex: 1000,
	width: '100%',
	height: '100%',
	background: 'rgba(0, 0, 0, 0.5)'
})
