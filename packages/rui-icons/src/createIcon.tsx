import React from 'react'
import type { DefaultProps } from '@rui/types'
import { useTheme } from '@rui/hooks'

export interface Props extends DefaultProps<SVGElement> {
	color?: string
	size?: number
	strokeWidth?: number
}

// TODO: convert to sxc
/* eslint-disable react/display-name */
export default (icon: JSX.Element) =>
	React.forwardRef<SVGElement, Props>((props, ref) => {
		const { color, size = 20, strokeWidth = 2, ...otherProps } = props

		const theme = useTheme()
		const colorStr = color && theme.fn.getColor(color)

		return React.cloneElement(icon, {
			ref,
			sx: { color: colorStr },
			width: size,
			height: size,
			strokeWidth,
			...otherProps
		})
	})
