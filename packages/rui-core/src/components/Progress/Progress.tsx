import { useCombinedRef, useSize } from '@rui/hooks'
import type { DefaultProps, SizeValue } from '@rui/types'
import React, { useRef } from 'react'

import { Bar, Track } from './Progress.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	/** Number between 0~100. */
	percent: number
	/**
	 * Progress bar color.
	 * @default primary
	 */
	color?: string
	trackColor?: string
	thickness?: SizeValue
	borderRadius?: SizeValue
	animated?: boolean
}

export const Progress = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		percent,
		color = 'primary',
		trackColor = 'surface.variant',
		thickness = 'sm',
		borderRadius = 'md',
		animated,
		...otherProps
	} = props
	const trackRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(ref, trackRef)
	const size = useSize(trackRef.current)

	return (
		<Track
			ref={combinedRef}
			$thickness={thickness}
			$trackColor={trackColor}
			$borderRadius={borderRadius}
			{...otherProps}>
			<Bar
				role="progressbar"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={percent}
				$percent={Math.max(0, Math.min(100, percent))}
				$color={color}
				$borderRadius={borderRadius}
				$animated={!!animated}
				$fullWidth={size?.width || 0}
				style={{ width: `${percent}%` }}
			/>
		</Track>
	)
})

Progress.displayName = 'Progress'
