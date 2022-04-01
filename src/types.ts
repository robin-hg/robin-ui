import type { RUITheme } from '@rui/style/theme'
import type { RUIThemeWithUtils } from '@rui/style/ThemeProvider'
import type { SX } from '@rui/style/styled/types'

declare global {
	namespace RobinUI {
		type StandardProps<C, Removals extends keyof React.HTMLProps<C> = never> = {
			sx?: SX
		} & Omit<React.HTMLProps<C>, 'as' | 'ref' | Removals> &
			React.AriaAttributes

		type Theme = RUITheme
		type ThemeWithUtils = RUIThemeWithUtils
	}
}

export {}
