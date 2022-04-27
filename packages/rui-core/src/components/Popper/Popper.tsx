import type { DefaultProps } from '@rui/types'
import React, { useState, useEffect, useContext, useMemo } from 'react'
import { usePopper, type Modifier, type StrictModifierNames } from 'react-popper'
import type { Placement } from '@popperjs/core'
import { useClickOutside } from '@rui/hooks'
import { ModalContext } from '../Modal'

import { Paper } from '../Paper'
import { Portal } from '../Portal'
import { PopperElement } from './PopperElement'

import { FadeContainer, Arrow } from './Popper.style'

export const PopperContext = React.createContext<{
	popperEl?: HTMLDivElement | null
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'target'> {
	target?: HTMLElement | null
	open?: boolean
	placement?: Placement
	modifiers?: Modifier<StrictModifierNames>[]
	elevation?: number
	timeout?: number
	disableClickOutside?: boolean
	continuousUpdate?: boolean
	withArrow?: boolean
	interactive?: boolean
	onClose?: () => void
}

export const Popper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		target,
		open,
		placement = 'bottom-start',
		modifiers = [],
		timeout = 200,
		disableClickOutside,
		withArrow,
		continuousUpdate,
		interactive,
		onClose,
		children,
		...otherProps
	} = props
	const [hovering, setHovering] = useState(false)
	const [innerRef, setInnerRef] = useState<HTMLDivElement | null>(null)
	const [arrowRef, setArrowRef] = useState<HTMLSpanElement | null>(null)
	const { modalEl } = useContext(ModalContext)
	const { popperEl } = useContext(PopperContext)
	const { styles, attributes, update } = usePopper(target, innerRef, {
		placement,
		modifiers: [{ name: 'arrow', options: { element: arrowRef } }, ...modifiers]
	})
	const ctxValue = useMemo(() => ({ popperEl: innerRef }), [innerRef])

	const show = open || (hovering && interactive)

	useEffect(() => {
		if (!show) {
			onClose?.()
		}
	}, [show])

	useClickOutside([target, innerRef], () => {
		if (!disableClickOutside) {
			onClose?.()
		}
	})

	if (!target) {
		return null
	}

	const finalPlacement = (attributes?.popper?.['data-popper-placement'] || 'bottom') as Placement

	return (
		<Portal target={popperEl || modalEl || undefined}>
			<PopperContext.Provider value={ctxValue}>
				<FadeContainer in={show} timeout={timeout} unmountOnExit>
					<PopperElement
						ref={setInnerRef}
						style={styles.popper}
						placement={finalPlacement}
						withArrow={!!withArrow}
						update={update}
						setHovering={setHovering}
						continuousUpdate={continuousUpdate}
						{...attributes}>
						<Paper ref={ref} variant="outlined" {...otherProps}>
							{children}
							{withArrow && <Arrow ref={setArrowRef} $placement={finalPlacement} style={styles.arrow} />}
						</Paper>
					</PopperElement>
				</FadeContainer>
			</PopperContext.Provider>
		</Portal>
	)
})

Popper.displayName = 'Popper'
