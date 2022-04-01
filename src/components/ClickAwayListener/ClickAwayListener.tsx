import { useOnClickOutside, useCombinedRef } from '@rui/hooks'
import React, { useRef } from 'react'

import { ClickAwayListenerContainer } from './ClickAwayListener.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {
	onClickAway: (event: PointerEvent) => void
}

const ClickAwayListener = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { onClickAway, children, ...otherProps } = props
	const listenerRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(ref, listenerRef)

	useOnClickOutside(listenerRef.current, onClickAway)

	return (
		<ClickAwayListenerContainer ref={combinedRef} {...otherProps}>
			{children}
		</ClickAwayListenerContainer>
	)
})

ClickAwayListener.displayName = 'ClickAwayListener'
export default ClickAwayListener
