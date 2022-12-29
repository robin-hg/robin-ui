import { ThemeProvider as EmThemeProvider } from '@emotion/react'

import { deepmerge } from '@robin-ui/utils'

import { defaultTheme } from '../defaultTheme'
import type { BaseTheme, DeepPartial, DerivedColorMode } from '../types'

import { themeFactory } from './themeFactory'

interface Props {
  colorMode: DerivedColorMode
  dynamicColor?: string | [string, string]
  theme?: DeepPartial<BaseTheme>
  children?: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = props => {
  const { colorMode, dynamicColor, theme = {}, children } = props
  const themeFinal = themeFactory(deepmerge(defaultTheme, theme), colorMode, dynamicColor)

  return <EmThemeProvider theme={themeFinal}>{children}</EmThemeProvider>
}
