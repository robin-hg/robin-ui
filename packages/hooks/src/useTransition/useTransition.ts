import type { Easing } from 'framer-motion'

import { camelCase } from '@robin-ui/utils'

import { useReducedMotion } from '../useReducedMotion'
import { useTheme } from '../useTheme'

export const useTransition = (durationOverride?: number, easeOverride?: Easing) => {
  const { transition } = useTheme()
  const reducedMotion = useReducedMotion()

  const duration = durationOverride ?? transition.duration
  const ease = easeOverride ?? (transition.ease ? camelCase(transition.ease) : undefined)

  return {
    duration: reducedMotion ? 0 : duration / 1000,
    ease
  }
}
