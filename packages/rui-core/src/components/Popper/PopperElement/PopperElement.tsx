import type { DefaultProps } from '@rui/types'
import React from 'react'
import type { Placement, Instance } from '@popperjs/core'
import { useEventListener } from '@rui/hooks'

import { PopperElementContainer } from './PopperElement.style'

interface Props extends DefaultProps<HTMLDivElement> {
	style: React.CSSProperties
	placement: Placement
	withArrow: boolean
	continuousUpdate?: boolean
	update: Instance['update'] | null
	setHovering: (hovering: boolean) => void
}

export const PopperElement = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { style, placement, withArrow, continuousUpdate, update, setHovering, children } = props

	useEventListener('pointermove', () => {
		if (continuousUpdate) {
			update?.()
		}
	})

	return (
		<PopperElementContainer
			ref={ref}
			style={style}
			$placement={placement}
			$withArrow={withArrow}
			onPointerEnter={() => setHovering(true)}
			onPointerLeave={() => setHovering(false)}>
			{children}
		</PopperElementContainer>
	)
})

PopperElement.displayName = 'PopperElement'
