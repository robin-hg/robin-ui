import styled from '@robin-ui/styles'

export const StyledDiv = styled.div(({ theme }) => ({
	height: '100%',
	maxHeight: 'inherit',
	overflow: 'auto',
	'&::-webkit-scrollbar': {
		width: '0.8rem',
		background: theme.palette.surface.variant
	},
	'&::-webkit-scrollbar-thumb': {
		background: theme.fn.getMixedColor('surface.variant', 'surface.onVariant', 0.5),
		borderRadius: theme.radius.sm,
		transition: theme.fn.getTransition(),
		'&:hover': {
			background: theme.fn.getMixedColor('surface.variant', 'surface.onVariant', 0.6)
		},
		'&:active': {
			background: theme.fn.getMixedColor('surface.variant', 'surface.onVariant', 0.65)
		}
	}
}))
