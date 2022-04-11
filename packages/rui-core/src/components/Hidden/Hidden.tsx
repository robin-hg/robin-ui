import type { Sizes } from '@rui/types'
import { useWidthQuery } from '@rui/hooks'

export interface Props {
	breakpoint: Sizes
	direction?: 'up' | 'down'
}

export const Hidden: React.FC<Props> = props => {
	const { breakpoint, direction = 'down', children } = props
	const active = useWidthQuery(breakpoint, direction)

	return !active ? <>{children}</> : null
}

Hidden.displayName = 'Hidden'
