import React from 'react'
import type { Placement, Instance } from '@popperjs/core'
import { useEventListener } from '@rui/hooks'

import { PopupElementContainer } from './PopupElement.style'

interface Props extends RobinUI.StandardProps<HTMLDivElement> {
	style: React.CSSProperties
	placement: Placement
	withArrow: boolean
	continuousUpdate?: boolean
	update: Instance['update'] | null
	setHovering: (hovering: boolean) => void
}

const PopupElement = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { style, placement, withArrow, continuousUpdate, update, setHovering, children } = props

	useEventListener(
		'pointermove',
		() => {
			if (continuousUpdate) {
				update?.()
			}
		},
		[update]
	)

	return (
		<PopupElementContainer
			ref={ref}
			style={style}
			$placement={placement}
			$withArrow={withArrow}
			onPointerEnter={() => setHovering(true)}
			onPointerLeave={() => setHovering(false)}>
			{children}
		</PopupElementContainer>
	)
})

PopupElement.displayName = 'PopupElement'
export default PopupElement
