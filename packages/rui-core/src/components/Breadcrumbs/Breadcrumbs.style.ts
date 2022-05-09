import type { SizeValue } from '@rui/theme'
import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'

interface BreadcrumbsContainerProps {
	$spacing: SizeValue
}

export const BreadcrumbsContainer = styled(BaseContainer)<BreadcrumbsContainerProps>(({ theme, $spacing }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.fn.getSize($spacing, theme.spacing)
}))
