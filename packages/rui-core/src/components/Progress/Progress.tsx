import type { DefaultProps, SizeValue } from '@rui/types'
import React from 'react'
import { clampNumber } from '@rui/utils'

import { Bar, Track } from './Progress.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	/** Number between 0~100. */
	value?: number
	/**
	 * Progress bar color.
	 * @default primary
	 */
	color?: string
	trackColor?: string
	thickness?: SizeValue
	radius?: SizeValue
	indeterminate?: boolean
	animated?: boolean
	noAria?: boolean
}

export const Progress = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		value = 0,
		color = 'primary',
		trackColor = 'surface.variant',
		thickness = 'sm',
		radius = 'md',
		indeterminate,
		animated,
		noAria,
		...otherProps
	} = props

	const ariaProps = !noAria
		? {
				role: 'progressbar',
				'aria-label': 'loading',
				'aria-valuemin': 0,
				'aria-valuemax': 100,
				'aria-valuenow': indeterminate ? undefined : value
		  }
		: {}

	return (
		<Track
			ref={ref}
			$thickness={thickness}
			$trackColor={trackColor}
			$radius={radius}
			{...ariaProps}
			{...otherProps}>
			<Bar
				$percent={clampNumber(value, 0, 100)}
				$color={color}
				$radius={radius}
				$indeterminate={!!indeterminate}
				$animated={!!animated}
				style={{ width: `${value}%` }}
			/>
		</Track>
	)
})

Progress.displayName = 'Progress'
