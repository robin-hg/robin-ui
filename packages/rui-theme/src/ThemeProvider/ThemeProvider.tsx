import type { BaseTheme, ColorMode } from '../types'
import merge from 'deepmerge'
import { ThemeProvider as EmThemeProvider } from '@emotion/react'
import { useColorMode, useReducedMotion } from '@rui/hooks'
import { themeFactory } from './themeFactory'
import { defaultTheme } from '../defaultTheme'
import { Global } from './Global'

interface Props {
	colorMode?: ColorMode
	forcedColorMode?: boolean
	theme?: Partial<BaseTheme>
}

export const ThemeProvider: React.FC<Props> = props => {
	const { colorMode: initialMode = 'light', forcedColorMode, theme = {}, children } = props
	const [colorMode] = useColorMode(initialMode)
	const reducedMotion = useReducedMotion()
	const themeFinal = themeFactory(
		merge(defaultTheme, theme),
		forcedColorMode && initialMode !== 'system' ? initialMode : colorMode,
		reducedMotion
	)

	return (
		<EmThemeProvider theme={themeFinal}>
			<Global />
			{children}
		</EmThemeProvider>
	)
}
