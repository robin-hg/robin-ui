import type { AugumentedTheme } from '../../types'

import { getColorFunctions } from './colorFunctions'
import { getSize } from './getSize'
import { getSpacing } from './getSpacing'
import { getTransition } from './getTransition'

export const createThemeFunctions = (augumentedTheme: AugumentedTheme) => ({
	...getColorFunctions(augumentedTheme),
	getSize,
	getSpacing: getSpacing(augumentedTheme),
	getTransition: getTransition(augumentedTheme)
})
