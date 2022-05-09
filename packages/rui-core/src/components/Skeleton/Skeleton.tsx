import type { DefaultProps, SizeValue } from '@rui/types'
import React from 'react'

import { SkeletonContainer } from './Skeleton.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	animated?: boolean
	loading?: boolean
	radius?: SizeValue
}

export const Skeleton = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { animated = true, loading = true, radius = 'sm', children, ...otherProps } = props

	return (
		<SkeletonContainer ref={ref} $animated={!!animated} $loading={!!loading} $radius={radius} {...otherProps}>
			{children}
		</SkeletonContainer>
	)
})

Skeleton.displayName = 'Skeleton'
