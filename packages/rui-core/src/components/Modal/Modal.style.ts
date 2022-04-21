import styled from '@rui/styles'
import { Paper } from '../Paper'

export const ModalContainer = styled.div({
	position: 'fixed',
	inset: 0,
	zIndex: 1000,
	'& > div': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	}
})

export const ModalPaper = styled(Paper)(({ theme }) => ({
	position: 'relative',
	zIndex: 1,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing.md,
	maxWidth: '60rem',
	minHeight: '35rem',
	maxHeight: 'calc(100% - 5rem)',
	padding: theme.fn.getSpacing(['md', 'lg'])
}))

export const Backdrop = styled.div({
	position: 'fixed',
	zIndex: 0,
	width: '100%',
	height: '100%',
	background: 'rgba(0, 0, 0, 0.5)'
})
