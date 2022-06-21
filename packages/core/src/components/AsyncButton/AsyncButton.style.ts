import styled from '@robin-ui/styles'
import { Button } from '../Button'

interface StyledButtonProps {
  $loading: boolean
}

export const StyledButton = styled(Button)<StyledButtonProps>(
  ({ $loading }) =>
    $loading && {
      pointerEvents: 'none',
      cursor: 'default'
    }
)
