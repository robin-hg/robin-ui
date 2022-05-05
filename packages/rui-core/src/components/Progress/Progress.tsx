import type { DefaultProps, SizeValue } from '@rui/types'
import React from 'react'

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
	indeterminate?: boolean
	animated?: boolean
}

export const Progress = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		percent,
		color = 'primary',
		trackColor = 'surface.variant',
		thickness = 'sm',
		borderRadius = 'md',
		indeterminate,
		animated,
		...otherProps
	} = props

	return (
		<Track
			ref={ref}
			role="progressbar"
			aria-label="loading"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={indeterminate ? undefined : percent}
			$thickness={thickness}
			$trackColor={trackColor}
			$borderRadius={borderRadius}
			{...otherProps}>
			<Bar
				$percent={Math.max(0, Math.min(100, percent))}
				$color={color}
				$borderRadius={borderRadius}
				$indeterminate={!!indeterminate}
				$animated={!!animated}
				style={{ width: `${percent}%` }}
			/>
		</Track>
	)
})

Progress.displayName = 'Progress'
