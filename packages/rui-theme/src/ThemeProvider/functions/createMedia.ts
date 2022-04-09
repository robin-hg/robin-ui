import { parseSize } from '@rui/utils'
import type { RUITheme } from '../../types'

export const createMedia = (theme: RUITheme, breakpoint: keyof RUITheme['breakpoints']) =>
	`@media screen and (max-width: ${parseSize(theme.breakpoints[breakpoint])})`
