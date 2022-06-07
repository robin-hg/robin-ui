import type { AugumentedTheme } from '../../types'

import { getColorFunctions } from './colorFunctions'
import { getSize } from './getSize'
import { getSpacing } from './getSpacing'
import { getTransition } from './getTransition'

type ColorFunctions = ReturnType<typeof getColorFunctions>

export interface ThemeFunctions extends ColorFunctions {
	getSize: typeof getSize
	getSpacing: ReturnType<typeof getSpacing>
	getTransition: ReturnType<typeof getTransition>
}

export const createThemeFunctions = (augumentedTheme: AugumentedTheme): ThemeFunctions => ({
	...getColorFunctions(augumentedTheme),
	getSize,
	getSpacing: getSpacing(augumentedTheme),
	getTransition: getTransition(augumentedTheme)
})
