import type { BaseTheme } from '../../types'
import { parseSize } from '@rui/utils'

export const createMediaBreakpoint = (theme: BaseTheme, breakpoint: keyof BaseTheme['breakpoints']) =>
	`@media screen and (max-width: ${parseSize(theme.breakpoints[breakpoint])})`
