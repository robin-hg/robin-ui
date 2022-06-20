import type { DefaultProps } from '@robin-ui/types'
import type { Easing } from 'framer-motion/types/types'
import React, { useRef } from 'react'
import { m } from 'framer-motion'
import { useSize } from '@robin-ui/hooks'

import { Content } from './DynamicResizer.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	duration?: string | number
	ease?: Easing
	disableResizeHeight?: boolean
	disableResizeWidth?: boolean
}

export const DynamicResizer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { duration, ease, disableResizeHeight, disableResizeWidth, children, ...otherProps } =
		props
	const contentRef = useRef<HTMLDivElement>(null)
	const size = useSize(contentRef.current)

	return (
		<m.div
			ref={ref}
			animate={{
				height: disableResizeHeight ? 'auto' : size?.height,
				width: disableResizeWidth ? 'auto' : size?.width
			}}
			transition={{
				duration: typeof duration === 'number' ? duration / 1000 : duration,
				ease
			}}>
			<Content ref={contentRef} {...otherProps}>
				{children}
			</Content>
		</m.div>
	)
})

DynamicResizer.displayName = 'DynamicResizer'
