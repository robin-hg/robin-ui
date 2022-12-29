import { styled } from '@robin-ui/styles'
import type { SizeValue } from '@robin-ui/theme'

import { BaseContainer } from '../BaseContainer'

interface BreadcrumbsContainerProps {
  $spacing: SizeValue
}

export const BreadcrumbsContainer = styled(BaseContainer)<BreadcrumbsContainerProps>(
  ({ theme, $spacing }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.fn.getSize($spacing, theme.spacing),
    color: theme.palette.surface.onVariant
  })
)
