import React, { useState, useEffect, useContext, useMemo, useRef } from 'react'
import { useFloating, shift, arrow, autoUpdate, type Placement, offset, flip } from '@floating-ui/react-dom'
import { useClickOutside, useCombinedRef, useIsomorphicLayoutEffect } from '@rui/hooks'
import { ModalContext } from '../Modal'

import { Portal } from '../Portal'
import { Paper } from '../Paper'

import { FadeContainer, Arrow, FloatingElement } from './Floating.style'

export const FloatingContext = React.createContext<{
	floatinghEl?: HTMLElement | null
}>({})

export interface Props extends React.ComponentProps<typeof Paper> {
	trigger?: HTMLElement | null
	open?: boolean
	placement?: Placement
	duration?: number
	withArrow?: boolean
	interactive?: boolean
	onClose?: () => void
}

export const Floating = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		trigger,
		open,
		placement = 'bottom',
		duration = 200,
		withArrow,
		interactive,
		onClose,
		children,
		style,
		...otherProps
	} = props
	const [hovering, setHovering] = useState(false)
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
		whileElementsMounted: autoUpdate,
		middleware: [offset(withArrow ? 8 : 4), flip(), shift(), arrow({ element: arrowRef })]
	})
	const floatingRef = useCombinedRef(floating, ref)

	useIsomorphicLayoutEffect(() => {
		if (trigger) {
			reference(trigger)
		}
	}, [trigger])

	const show = open || (hovering && interactive)

	useEffect(() => {
		if (!show) {
			onClose?.()
		}
	}, [show])

	useClickOutside([trigger, refs.floating.current], () => {
		onClose?.()
	})

	const ctxValue = useMemo(() => ({ floatinghEl: refs.floating.current }), [refs.floating.current])

	return (
		<Portal container={floatinghEl || modalEl || undefined}>
			<FloatingContext.Provider value={ctxValue}>
				<FadeContainer in={show} duration={duration} unmountOnExit>
					<FloatingElement
						ref={floatingRef}
						style={{
							...style,
							position: strategy,
							top: y ?? '',
							left: x ?? ''
						}}
						onPointerEnter={() => setHovering(true)}
						onPointerLeave={() => setHovering(false)}
						{...otherProps}>
						{children}
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
				</FadeContainer>
			</FloatingContext.Provider>
		</Portal>
	)
})

Floating.displayName = 'Floating'
