import { styled } from '@robin-ui/styles'

import { Popover } from '../Popover'

interface MenuProps {
  $minWidth: string | number
  $maxHeight: string | number
}

export const StyledMenu = styled(Popover)<MenuProps>(({ theme, $minWidth, $maxHeight }) => ({
  minWidth: $minWidth,
  maxHeight: $maxHeight,
  overflow: 'hidden',
  '& > div': {
    padding: theme.spacing.xs
  }
}))
