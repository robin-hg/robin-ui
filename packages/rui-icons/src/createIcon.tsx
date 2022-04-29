import type { DefaultProps, ColorToken } from '@rui/types'
import React from 'react'
import { useTheme } from '@rui/hooks'

export interface Props extends DefaultProps<SVGElement, 'children'> {
	color?: ColorToken
	size?: number
	strokeWidth?: number
}

export default (icon: JSX.Element) => {
	const Icon = React.forwardRef<SVGElement, Props>((props, ref) => {
		const { color = 'inherit', size = 20, strokeWidth = 2, sx, ...otherProps } = props

		const theme = useTheme()
		const colorStr = color !== 'inherit' && theme.fn.getColor(color)

		return React.cloneElement(icon, {
			ref,
			sx: [{ color: colorStr }, sx],
			width: size,
			height: size,
			strokeWidth,
			'aria-hidden': true,
			...otherProps
		})
	})
	Icon.displayName = 'SVGIcon'

	return Icon
}
