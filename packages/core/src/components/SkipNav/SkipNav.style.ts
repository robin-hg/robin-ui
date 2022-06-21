import styled from '@robin-ui/styles'
import { Link } from '../Link'

export const StyledLink = styled(Link)(({ theme }) => ({
  position: 'absolute',
  top: 10,
  left: 10,
  width: '0.1rem',
  height: '0.1rem',
  margin: '-0.1rem',
  background: theme.palette.surface.base,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  '&:focus': {
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: theme.spacing.sm
  }
}))
