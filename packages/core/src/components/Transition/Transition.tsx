import React from 'react'
import { AnimatePresence, type MotionProps, type Variant, m } from 'framer-motion'
import { useTransition } from '@robin-ui/hooks'

type Animation = {
  enter: Variant
  exit: Variant
}

export interface Props extends MotionProps {
  in?: boolean
  variants?: Animation
  duration?: number
  // TODO: import Easing type when available in framer-motion
  ease?: 'ease-in' | 'ease-in-out' | 'ease-out' | 'linear'
  unmountOnExit?: boolean
  motionOnly?: boolean
  children?: React.ReactNode
}

const TransitionFactory = (defaultAnimation?: Animation) => {
  const BaseTransition = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const {
      in: inProp,
      variants,
      duration,
      ease,
      unmountOnExit,
      motionOnly,
      children,
      ...otherProps
    } = props
    const transition = useTransition(duration, ease)

    const transitionComponent = (
      <m.div
        ref={ref}
        initial={unmountOnExit ? 'exit' : false}
        animate={unmountOnExit || inProp ? 'enter' : 'exit'}
        variants={variants || defaultAnimation}
        transition={transition}
        {...otherProps}>
        {children}
      </m.div>
    )

    if (!unmountOnExit || motionOnly) {
      return transitionComponent
    }

    return <AnimatePresence>{inProp && transitionComponent}</AnimatePresence>
  })
  BaseTransition.displayName = 'Transition'

  return BaseTransition
}

export const Transition = TransitionFactory()

export const Fade = TransitionFactory({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

export const Collapse = TransitionFactory({
  enter: { opacity: 1, height: 'auto', overflow: 'hidden' },
  exit: { opacity: 0, height: 0, overflow: 'hidden' }
})

export const Grow = TransitionFactory({
  enter: { opacity: 1, transform: 'scale(1)' },
  exit: { opacity: 0, transform: 'scale(0.75)' }
})
