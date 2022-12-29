import { createContext, forwardRef, useContext, useEffect, useMemo, useRef } from 'react'
import {
  type Placement,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating
} from '@floating-ui/react-dom'
import {
  useClickOutside,
  useCombinedRef,
  useForceUpdate,
  useIsomorphicLayoutEffect
} from '@robin-ui/hooks'

import { ModalContext } from '../Modal'
import type { Paper } from '../Paper'
import { Portal } from '../Portal'
import { FocusTrap } from '../FocusTrap'

import { Arrow, FadeContainer, FloatingElement } from './Floating.style'

export const FloatingContext = createContext<{
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

export const Floating = forwardRef<HTMLDivElement, Props>((props, ref) => {
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
  useForceUpdate(true)

  useEffect(() => {
    if (trapFocus) {
      if (open) {
        refs.floating.current?.focus()
      } else {
        trigger?.focus()
      }
    }
  }, [open])

  useIsomorphicLayoutEffect(() => {
    if (trigger) {
      reference(trigger)
    }
  }, [trigger])

  useClickOutside([trigger, refs.floating.current], () => {
    if (open) {
      onClose?.()
    }
  })

  const ctxValue = useMemo(() => ({ floatinghEl: refs.floating.current }), [refs.floating])

  if (!trigger) {
    return null
  }

  return (
    <Portal container={floatinghEl ?? modalEl ?? undefined}>
      <FadeContainer in={open} duration={duration} unmountOnExit>
        <FocusTrap disabled={!trapFocus}>
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
