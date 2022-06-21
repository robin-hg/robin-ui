import type { SX } from '@robin-ui/styles'
export type { RobinTheme, Size, SizeValue, ColorToken, DeepPartial } from '@robin-ui/theme'

export type DefaultProps<
  C,
  Removals extends keyof React.HTMLProps<C> = never
> = React.AriaAttributes & Omit<React.HTMLProps<C>, 'as' | 'ref' | Removals> & { sx?: SX }
