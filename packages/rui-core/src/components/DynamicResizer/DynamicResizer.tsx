import type { DefaultProps } from '@rui/types'
import React, { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { useIsomorphicLayoutEffect, usePreviousState, useSize } from '@rui/hooks'

import { DynamicResizeContainer } from './DynamicResizer.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	/**
	 * Animation duration.
	 * @default 200
	 */
	duration?: number
	disableResizeHeight?: boolean
	disableResizeWidth?: boolean
}

type Stages = 'preparing' | 'updating' | 'ready'

export const DynamicResizer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { duration = 200, disableResizeHeight, disableResizeWidth, children, ...otherProps } = props
	const [stage, setStage] = useState<Stages>('ready')
	const contentRef = useRef<HTMLDivElement>(null)
	const size = useSize(contentRef.current)
	const previousSize = usePreviousState(size)

	useIsomorphicLayoutEffect(() => {
		setStage('preparing')
		const prepareTimeout = window.setTimeout(() => flushSync(() => setStage('updating')), 10)
		const updateTimeout = window.setTimeout(() => flushSync(() => setStage('ready')), duration - 10)
		return () => {
			window.clearTimeout(prepareTimeout)
			window.clearTimeout(updateTimeout)
		}
	}, [children])

	const [width, height] = (() => {
		switch (stage) {
			case 'preparing':
				return [previousSize?.width, previousSize?.height]
			case 'updating':
				return [size?.width, size?.height]
			case 'ready':
			default:
				return ['auto', 'auto']
		}
	})()

	return (
		<DynamicResizeContainer
			ref={ref}
			$width={disableResizeWidth ? 'auto' : width}
			$height={disableResizeHeight ? 'auto' : height}
			$duration={duration}
			{...otherProps}>
			<div ref={contentRef}>{children}</div>
		</DynamicResizeContainer>
	)
})

DynamicResizer.displayName = 'DynamicResizer'
