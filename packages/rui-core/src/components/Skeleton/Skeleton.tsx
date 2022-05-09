import type { DefaultProps, SizeValue } from '@rui/types'
import React from 'react'

import { SkeletonContainer } from './Skeleton.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	animated?: boolean
	loading?: boolean
	borderRadius?: SizeValue
}

export const Skeleton = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { animated = true, loading = true, borderRadius = 'sm', children, ...otherProps } = props

	return (
		<SkeletonContainer
			ref={ref}
			$animated={!!animated}
			$loading={!!loading}
			$borderRadius={borderRadius}
			{...otherProps}>
			{children}
		</SkeletonContainer>
	)
})

Skeleton.displayName = 'Skeleton'
