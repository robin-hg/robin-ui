import type { DefaultProps } from '@rui/types'
import React, { useRef } from 'react'
import { m } from 'framer-motion'
import { useSize } from '@rui/hooks'

import { Content } from './DynamicResizer.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	/**
	 * Animation duration.
	 * @default 200
	 */
	duration?: number
	disableResizeHeight?: boolean
	disableResizeWidth?: boolean
}

export const DynamicResizer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { duration = 200, disableResizeHeight, disableResizeWidth, children, ...otherProps } = props
	const contentRef = useRef<HTMLDivElement>(null)
	const size = useSize(contentRef.current)

	return (
		<m.div
			ref={ref}
			animate={{
				height: (!disableResizeHeight && size?.height) || 'auto',
				width: (!disableResizeWidth && size?.width) || 'auto'
			}}
			transition={{ duration: duration / 1000, ease: 'easeOut' }}>
			<Content ref={contentRef} {...otherProps}>
				{children}
			</Content>
		</m.div>
	)
})

DynamicResizer.displayName = 'DynamicResizer'
