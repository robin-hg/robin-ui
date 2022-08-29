import { camelCase } from '@robin-ui/utils'

import { useReducedMotion } from '../useReducedMotion'
import { useTheme } from '../useTheme'

export const useTransition = (
  durationOverride?: number,
  easeOverride?: 'ease-in' | 'ease-in-out' | 'ease-out' | 'linear'
) => {
  const { transition } = useTheme()
  const reducedMotion = useReducedMotion()

  const duration = durationOverride ?? transition.duration
  const ease = easeOverride || transition.ease

  return {
    duration: reducedMotion ? 0 : duration / 1000,
    ease: ease ? camelCase(ease) : undefined
  }
}
