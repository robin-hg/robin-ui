import React, { useRef, useState } from 'react'
import { ThemeProvider } from '@rui/theme'
import { useId, useTheme } from '@rui/hooks'

import { Floating } from '../Floating'

import { TooltipContainer } from './Tooltip.style'

export interface Props extends Omit<React.ComponentProps<typeof Floating>, 'label'> {
	label?: React.ReactNode
	children?: React.ReactElement
}

export const Tooltip = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { open: openOverride, label, id, children, ...otherProps } = props
	const [open, setOpen] = useState(false)
	const targetRef = useRef<HTMLElement>(null)
	const { colorMode } = useTheme()
	const _id = useId(id)

	return (
		<>
			<ThemeProvider colorMode={colorMode === 'light' ? 'dark' : 'light'} forcedColorMode>
				<TooltipContainer
					ref={ref}
					id={_id}
					trigger={targetRef.current}
					open={openOverride || open}
					withArrow
					padding={['xs', 'sm']}
					borderRadius="sm"
					{...otherProps}>
					{label}
				</TooltipContainer>
			</ThemeProvider>
			{children &&
				React.cloneElement(children, {
					ref: targetRef,
					'aria-describedby': open ? _id : undefined,
					onPointerOver: (event: React.PointerEvent) => {
						children.props.onMouseOver?.(event)
						setOpen(true)
					},
					onPointerLeave: (event: React.PointerEvent) => {
						children.props.onPointerLeave?.(event)
						setOpen(false)
					},
					onFocus: (event: React.FocusEvent) => {
						children.props.onFocus?.(event)
						setOpen(true)
					},
					onBlur: (event: React.FocusEvent) => {
						children.props.onBlur?.(event)
						setOpen(false)
					}
				})}
		</>
	)
})

Tooltip.displayName = 'Tooltip'
