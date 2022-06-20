import styled from '@robin-ui/styles'
import { Button } from '../Button'

interface MenuItemContainerProps {
	$active: boolean
}

export const MenuItemContainer = styled(Button)<MenuItemContainerProps>(
	({ theme }) => ({
		display: 'block',
		width: '100%',
		padding: theme.fn.getSpacing(['xs', 'sm']),
		fontWeight: 400,
		textAlign: 'left',
		outline: 'none !important',
		whiteSpace: 'break-spaces'
	}),
	({ theme, $active }) =>
		!$active && {
			'&:hover': {
				background: theme.fn.getAlphaColor('primary', 'hover')
			},
			'&:focus-visible': {
				background: theme.fn.getAlphaColor('primary', 'focus')
			},
			'&:active': {
				background: theme.fn.getAlphaColor('primary', 'active')
			}
		},
	({ theme, $active }) =>
		$active && {
			background: theme.fn.getMixedColor('surface.variant', 'primary', 'surfaceTint')
		}
)
