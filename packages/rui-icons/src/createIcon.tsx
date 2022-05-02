import type { DefaultProps, ColorToken, SizeValue } from '@rui/types'
import React from 'react'
import { useTheme } from '@rui/hooks'

export interface Props extends DefaultProps<SVGElement, 'children' | 'size'> {
	color?: ColorToken
	size?: SizeValue
	strokeWidth?: number
}

export default (icon: JSX.Element) => {
	const Icon = React.forwardRef<SVGElement, Props>((props, ref) => {
		const { color = 'inherit', size = 'sm', strokeWidth = 2, sx, ...otherProps } = props

		const theme = useTheme()
		const colorStr = color !== 'inherit' && theme.fn.getColor(color)

		return React.cloneElement(icon, {
			ref,
			sx: [{ color: colorStr }, sx],
			width: theme.fn.getSize(size, theme.size),
			height: theme.fn.getSize(size, theme.size),
			strokeWidth,
			'aria-hidden': true,
			...otherProps
		})
	})
	Icon.displayName = 'SVGIcon'

	return Icon
}
