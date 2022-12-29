import { forwardRef } from 'react'

import { AnimatePresence } from 'framer-motion'

import { Collapse, Fade, Grow, type Props as TransitionProps } from '../Transition'

const defaultTransitions = {
  collapse: Collapse,
  grow: Grow,
  fade: Fade
}

export interface Props extends TransitionProps {
  currentKey: string | number
  type?: 'fade' | 'collapse' | 'grow'
  children?: React.ReactNode
}

export const TransitionSwitch = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { currentKey, type = 'fade', children, ...otherProps } = props

  const Transition = defaultTransitions[type] || Fade

  return (
    <AnimatePresence mode="wait">
      <Transition ref={ref} key={currentKey} unmountOnExit motionOnly {...otherProps}>
        {children}
      </Transition>
    </AnimatePresence>
  )
})

TransitionSwitch.displayName = 'TransitionSwitch'
