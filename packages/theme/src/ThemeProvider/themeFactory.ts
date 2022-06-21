import type { RobinTheme, BaseTheme, AugumentedTheme, DerivedColorMode } from '../types'
import { createThemeFunctions } from './functions'
import { parseSize } from '@robin-ui/utils'
import { generatePalette } from './generatePalette'

const createMediaBreakpoint = (theme: BaseTheme, breakpoint: keyof BaseTheme['breakpoints']) =>
  `@media screen and (max-width: ${parseSize(theme.breakpoints[breakpoint])})`

export const themeFactory = (
  theme: BaseTheme,
  colorMode: DerivedColorMode,
  dynamicColor?: string | [string, string]
): RobinTheme => {
  let palette = colorMode === 'light' ? theme.lightPalette : theme.darkPalette

  if (dynamicColor) {
    palette = {
      ...palette,
      ...generatePalette(dynamicColor, colorMode)
    }
  }

  const augumentedTheme: AugumentedTheme = {
    colorMode,
    ...theme,
    palette,
    media: {
      xs: createMediaBreakpoint(theme, 'xs'),
      sm: createMediaBreakpoint(theme, 'sm'),
      md: createMediaBreakpoint(theme, 'md'),
      lg: createMediaBreakpoint(theme, 'lg'),
      xl: createMediaBreakpoint(theme, 'xl')
    }
  }

  return {
    ...augumentedTheme,
    fn: createThemeFunctions(augumentedTheme)
  }
}
