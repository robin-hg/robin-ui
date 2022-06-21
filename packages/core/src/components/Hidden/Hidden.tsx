import type { Size } from '@robin-ui/types'
import { useWidthQuery } from '@robin-ui/hooks'

export interface Props {
  breakpoint: Size
  direction?: 'up' | 'down'
  children?: React.ReactNode
}

export const Hidden: React.FC<Props> = props => {
  const { breakpoint, direction = 'down', children } = props
  const active = useWidthQuery(breakpoint, direction)

  return !active ? <>{children}</> : null
}

Hidden.displayName = 'Hidden'
