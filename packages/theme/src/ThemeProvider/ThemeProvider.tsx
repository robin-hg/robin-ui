import type { BaseTheme, DerrivedColorMode, DeepPartial } from '../types'
import { ThemeProvider as EmThemeProvider } from '@emotion/react'
import { deepmerge } from '@robin-ui/utils'
import { themeFactory } from './themeFactory'
import { defaultTheme } from '../defaultTheme'

interface Props {
  colorMode: DerrivedColorMode
  dynamicColor?: string | [string, string]
  theme?: DeepPartial<BaseTheme>
  children?: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = props => {
  const { colorMode, dynamicColor, theme = {}, children } = props
  const themeFinal = themeFactory(deepmerge(defaultTheme, theme), colorMode, dynamicColor)

  return <EmThemeProvider theme={themeFinal}>{children}</EmThemeProvider>
}
