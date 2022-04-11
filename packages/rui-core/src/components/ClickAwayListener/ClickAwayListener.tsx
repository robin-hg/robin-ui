import type { DefaultProps } from '@rui/types'
import React, { useRef } from 'react'
import { useClickOutside, useCombinedRef } from '@rui/hooks'
import { sxc } from '@rui/styles'

export interface Props extends DefaultProps<HTMLDivElement> {
	onClickAway: (event: PointerEvent) => void
}

export const ClickAwayListener = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { onClickAway, children, ...otherProps } = props
	const listenerRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(ref, listenerRef)

	useClickOutside(listenerRef, onClickAway)

	return (
		<sxc.div ref={combinedRef} {...otherProps}>
			{children}
		</sxc.div>
	)
})

ClickAwayListener.displayName = 'ClickAwayListener'
