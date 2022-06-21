import type { DefaultProps } from '@robin-ui/types'
import React from 'react'
import type { Easing } from 'framer-motion/types/types'
import { AnimatePresence } from 'framer-motion'

import { Fade, Collapse, Grow } from '../Transition'

const defaultTransitions = {
  collapse: Collapse,
  grow: Grow,
  fade: Fade
}

export interface Props extends DefaultProps<HTMLDivElement> {
  currentKey: string | number
  transition?: 'fade' | 'collapse' | 'grow'
  duration?: number
  ease?: Easing
}

export const TransitionSwitch = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { currentKey, transition = 'fade', duration = 200, children, ...otherProps } = props

  const Transition = defaultTransitions[transition] || Fade

  return (
    <AnimatePresence exitBeforeEnter>
      <Transition
        ref={ref}
        key={currentKey}
        in
        unmountOnExit
        duration={duration}
        motionOnly
        {...otherProps}>
        {children}
      </Transition>
    </AnimatePresence>
  )
})

TransitionSwitch.displayName = 'TransitionSwitch'
