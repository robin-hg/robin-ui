import { useMedia } from '@rui/hooks'
import React from 'react'

export interface Props {
	breakpoint: 'sm' | 'md' | 'lg' | 'xl'
	direction?: 'up' | 'down'
}

const Hidden: React.FC<Props> = props => {
	const { breakpoint, direction = 'down', children } = props
	const active = useMedia(breakpoint, direction)

	return !active ? <>{children}</> : null
}

Hidden.displayName = 'Hidden'
export default Hidden
