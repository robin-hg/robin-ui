import React, { useState, useEffect, useContext } from 'react'
import { usePopper, type Modifier, type StrictModifierNames } from 'react-popper'
import type { Placement } from '@popperjs/core'
import { useOnClickOutside } from 'hooks'
import { ModalContext } from 'components/Modal'

import { Paper, Portal } from 'index'
import PopupElement from './PopupElement'

import { FadeContainer, Arrow } from './Popup.style'

export const PopupContext = React.createContext<{
	popupEl?: HTMLDivElement | null
}>({})

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'target'> {
	target: Element
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

const Popup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
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
	const { modalRef } = useContext(ModalContext)
	const { popupEl } = useContext(PopupContext)
	const { styles, attributes, update } = usePopper(target, innerRef, {
		placement,
		modifiers: [{ name: 'arrow', options: { element: arrowRef } }, ...modifiers]
	})

	const show = open || (hovering && interactive)

	useEffect(() => {
		if (!show) {
			onClose?.()
		}
	}, [show])

	useOnClickOutside(target, event => {
		if (!disableClickOutside && !innerRef?.contains(event.target as Element)) {
			onClose?.()
		}
	})

	return (
		<Portal target={popupEl || modalRef?.current || undefined}>
			<PopupContext.Provider value={{ popupEl: innerRef }}>
				<FadeContainer in={show} timeout={timeout}>
					<PopupElement
						ref={setInnerRef}
						style={styles.popper}
						placement={(attributes?.popper?.['data-popper-placement'] || 'bottom') as Placement}
						withArrow={!!withArrow}
						update={update}
						setHovering={setHovering}
						continuousUpdate={continuousUpdate}
						{...attributes}>
						<Paper ref={ref} elevation={0} {...otherProps}>
							{children}
							{withArrow && <Arrow ref={setArrowRef} style={styles.arrow} />}
						</Paper>
					</PopupElement>
				</FadeContainer>
			</PopupContext.Provider>
		</Portal>
	)
})

Popup.displayName = 'Popup'
export default Popup
