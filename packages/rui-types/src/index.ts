import type { SX } from '@rui/styles'
export type { RUITheme, Size, SizeValue } from '@rui/theme'

export type DefaultProps<C, Removals extends keyof React.HTMLProps<C> = never> = {
	sx?: SX
} & Omit<React.HTMLProps<C>, 'as' | 'ref' | Removals> &
	React.AriaAttributes
