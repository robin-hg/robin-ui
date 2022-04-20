import React from 'react'
import type { DefaultProps } from '@rui/types'
import { useTheme } from '@rui/hooks'

export interface Props extends DefaultProps<SVGElement, 'children'> {
	color?: string
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
			...otherProps
		})
	})
	Icon.displayName = 'SVGIcon'

	return Icon
}
