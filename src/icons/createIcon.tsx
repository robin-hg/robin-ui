import React from 'react'
import { useTheme } from '@rui/hooks'

export interface Props extends RobinUI.StandardProps<SVGElement> {
	color?: string
	size?: number
}

/* eslint-disable react/display-name */
export default (icon: JSX.Element) =>
	React.forwardRef<SVGElement, Props>((props, ref) => {
		const { color, size = 20, style, ...otherProps } = props

		const theme = useTheme()
		const colorStr = (color && theme.utils.getColor(color)) || style?.color

		return React.cloneElement(icon, {
			ref,
			style: {
				...style,
				color: colorStr
			},
			width: size,
			height: size,
			...otherProps
		})
	})
