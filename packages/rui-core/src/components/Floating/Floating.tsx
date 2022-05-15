import React, { useContext, useEffect, useMemo, useRef } from 'react'
import { useFloating, shift, arrow, autoUpdate, type Placement, offset, flip } from '@floating-ui/react-dom'
import { useClickOutside, useCombinedRef, useIsomorphicLayoutEffect } from '@rui/hooks'
import { ModalContext } from '../Modal'

import { Portal } from '../Portal'
import { Paper } from '../Paper'

import { FadeContainer, Arrow, FloatingElement } from './Floating.style'
import { FocusTrap } from '../FocusTrap'

export const FloatingContext = React.createContext<{
	floatinghEl?: HTMLElement | null
}>({})

export interface Props extends React.ComponentProps<typeof Paper> {
	trigger?: HTMLElement | null
	open?: boolean
	placement?: Placement
	duration?: number
	withArrow?: boolean
	trapFocus?: boolean
	continuousUpdate?: boolean
	onClose?: () => void
}

export const Floating = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		trigger,
		open,
		placement = 'bottom-start',
		duration = 200,
		withArrow,
		trapFocus,
		continuousUpdate,
		onClose,
		children,
		style,
		...otherProps
	} = props
	const arrowRef = useRef<HTMLDivElement>(null)
	const { modalEl } = useContext(ModalContext)
	const { floatinghEl } = useContext(FloatingContext)
	const {
		x,
		y,
		reference,
		floating,
		refs,
		strategy,
		placement: finalPlacement,
		middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
	} = useFloating({
		placement,
		whileElementsMounted: (referenceEl, floatingEl, update) =>
			autoUpdate(referenceEl, floatingEl, update, { animationFrame: continuousUpdate }),
		middleware: [offset(withArrow ? 8 : 4), flip(), shift(), arrow({ element: arrowRef })]
	})
	const combinedRef = useCombinedRef(floating, ref)

	useEffect(() => {
		if (open && trapFocus) {
			refs.floating.current?.focus()
		}
	}, [open])

	useIsomorphicLayoutEffect(() => {
		if (trigger) {
			reference(trigger)
		}
	}, [trigger])

	useClickOutside([trigger, refs.floating.current], () => {
		onClose?.()
	})

	const ctxValue = useMemo(() => ({ floatinghEl: refs.floating.current }), [refs.floating.current])

	if (!trigger) {
		return null
	}

	return (
		<Portal container={floatinghEl || modalEl || undefined}>
			<FadeContainer in={open} duration={duration} unmountOnExit>
				<FocusTrap restoreFocus disabled={!trapFocus}>
					<FloatingElement
						ref={combinedRef}
						style={{
							...style,
							position: strategy,
							top: y ?? '',
							left: x ?? ''
						}}
						radius="sm"
						tabIndex={-1}
						{...otherProps}>
						<FloatingContext.Provider value={ctxValue}>{children}</FloatingContext.Provider>
						{withArrow && (
							<Arrow
								ref={arrowRef}
								style={{
									left: arrowX ? `${arrowX}px` : undefined,
									top: arrowY ? `${arrowY}px` : undefined
								}}
								$placement={finalPlacement}
							/>
						)}
					</FloatingElement>
				</FocusTrap>
			</FadeContainer>
		</Portal>
	)
})

Floating.displayName = 'Floating'
