import type { BaseTheme, ColorMode } from '../types'
import merge from 'deepmerge'
import { ThemeProvider as EmThemeProvider } from '@emotion/react'
import { useColorMode, useTheme } from '@rui/hooks'
import { themeFactory } from './themeFactory'
import { defaultTheme } from '../defaultTheme'
import { Global } from './Global'

interface Props {
	colorMode?: ColorMode
	forcedColorMode?: boolean
	theme?: Partial<BaseTheme>
	children?: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = props => {
	const { colorMode: initialMode = 'light', forcedColorMode, theme = {}, children } = props
	const [colorMode] = useColorMode(initialMode)
	const { palette } = useTheme()
	const themeFinal = themeFactory(
		merge(defaultTheme, theme),
		forcedColorMode && initialMode !== 'system' ? initialMode : colorMode
	)

	return (
		<EmThemeProvider theme={themeFinal}>
			{!palette && <Global />}
			{children}
		</EmThemeProvider>
	)
}
