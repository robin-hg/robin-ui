import type { DefaultProps } from '@robin-ui/types'
import type { Easing } from 'framer-motion/types/types'
import React from 'react'
import { AnimatePresence, m, type Variant } from 'framer-motion'
import { sxc } from '@robin-ui/styles'

type Animation = {
  enter: Variant
  exit: Variant
}

export interface Props extends DefaultProps<HTMLDivElement> {
  in?: boolean
  variants?: Animation
  duration?: string | number
  ease?: Easing
  unmountOnExit?: boolean
  motionOnly?: boolean
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

    const transitionComponent = (
      <m.div
        initial={unmountOnExit ? 'exit' : false}
        animate={inProp ? 'enter' : 'exit'}
        exit="exit"
        variants={variants || defaultAnimation}
        transition={{
          duration: typeof duration === 'number' ? duration / 1000 : duration,
          ease
        }}>
        <sxc.div ref={ref} {...otherProps}>
          {children}
        </sxc.div>
      </m.div>
    )

    if (motionOnly) {
      return transitionComponent
    }

    const show = unmountOnExit ? inProp : true

    return <AnimatePresence>{show && transitionComponent}</AnimatePresence>
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
