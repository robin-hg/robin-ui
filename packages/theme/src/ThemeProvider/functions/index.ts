import type { AugumentedTheme } from '../../types'

import { getColorFunctions } from './colorFunctions'
import { generateGradient } from './generateGradient'
import { getSize } from './getSize'
import { getSpacing } from './getSpacing'
import { getTransition } from './getTransition'

type ColorFunctions = ReturnType<typeof getColorFunctions>

export interface ThemeFunctions extends ColorFunctions {
  generateGradient: typeof generateGradient
  getSize: typeof getSize
  getSpacing: ReturnType<typeof getSpacing>
  getTransition: ReturnType<typeof getTransition>
}

export const createThemeFunctions = (augumentedTheme: AugumentedTheme): ThemeFunctions => ({
  ...getColorFunctions(augumentedTheme),
  generateGradient,
  getSize,
  getSpacing: getSpacing(augumentedTheme),
  getTransition: getTransition(augumentedTheme)
})
