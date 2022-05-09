import type { BaseTheme, ColorMode } from '../types'
import merge from 'deepmerge'
import { ThemeProvider as EmThemeProvider } from '@emotion/react'
import { useColorMode } from '@rui/hooks'
import { themeFactory } from './themeFactory'
import { defaultTheme } from '../defaultTheme'
import { Global } from './Global'

interface Props {
	colorMode?: ColorMode
	forcedColorMode?: boolean
	addGlobalCss?: boolean
	theme?: Partial<BaseTheme>
	children?: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = props => {
	const { colorMode: initialMode = 'light', forcedColorMode, addGlobalCss, theme = {}, children } = props
	const [colorMode] = useColorMode(initialMode)
	const themeFinal = themeFactory(
		merge(defaultTheme, theme),
		forcedColorMode && initialMode !== 'system' ? initialMode : colorMode
	)

	return (
		<EmThemeProvider theme={themeFinal}>
			{addGlobalCss && <Global />}
			{children}
		</EmThemeProvider>
	)
}
