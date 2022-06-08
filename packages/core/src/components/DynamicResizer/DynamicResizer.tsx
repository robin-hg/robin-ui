import type { DefaultProps } from '@robin-ui/types'
import type { Easing } from 'framer-motion/types/types'
import React, { useRef } from 'react'
import { m } from 'framer-motion'
import { useSize, useTheme } from '@robin-ui/hooks'
import { camelCase } from '@robin-ui/utils'

import { Content } from './DynamicResizer.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	/**
	 * Animation duration.
	 * @default 200
	 */
	duration?: number
	ease?: Easing
	disableResizeHeight?: boolean
	disableResizeWidth?: boolean
}

export const DynamicResizer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		duration = 200,
		ease: easeOverride,
		disableResizeHeight,
		disableResizeWidth,
		children,
		...otherProps
	} = props
	const contentRef = useRef<HTMLDivElement>(null)
	const size = useSize(contentRef.current)
	const { transition } = useTheme()

	const ease = easeOverride || camelCase(transition.ease || '')
	const height = size?.height || 'auto'
	const width = size?.width || 'auto'

	return (
		<m.div
			ref={ref}
			animate={{
				height: disableResizeHeight ? 'auto' : height,
				width: disableResizeWidth ? 'auto' : width
			}}
			transition={{ duration: duration / 1000, ease }}>
			<Content ref={contentRef} {...otherProps}>
				{children}
			</Content>
		</m.div>
	)
})

DynamicResizer.displayName = 'DynamicResizer'
