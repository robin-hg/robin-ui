import type { SX } from '@rui/styles'

export type DefaultProps<C, Removals extends keyof React.HTMLProps<C> = never> = {
	sx?: SX
} & Omit<React.HTMLProps<C>, 'as' | 'ref' | Removals> &
	React.AriaAttributes
