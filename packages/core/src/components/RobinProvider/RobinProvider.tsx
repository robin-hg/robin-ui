import type { DeepPartial } from '@robin-ui/types'
import type { BaseTheme, ColorMode, DerivedColorMode } from '@robin-ui/theme'
import { ThemeProvider } from '@robin-ui/theme'
import { useColorMode } from '@robin-ui/hooks'

import { Global } from './Global'
import { MotionProvider } from './MotionProvider'

interface Props {
  colorMode?: DerivedColorMode
  dynamicColor?: string | [string, string]
  defaultColorMode?: ColorMode
  addGlobalCSS?: boolean
  theme?: DeepPartial<BaseTheme>
  children?: React.ReactNode
}

export const RobinProvider: React.FC<Props> = props => {
  const {
    colorMode: fixedColorMode,
    dynamicColor,
    defaultColorMode = 'system',
    addGlobalCSS = true,
    theme,
    children
  } = props
  const [colorMode] = useColorMode(defaultColorMode)

  return (
    <ThemeProvider
      colorMode={fixedColorMode || colorMode}
      dynamicColor={dynamicColor}
      theme={theme}>
      {addGlobalCSS && <Global />}
      <MotionProvider>{children}</MotionProvider>
    </ThemeProvider>
  )
}
