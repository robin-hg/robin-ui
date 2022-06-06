import type { BaseTheme, DerrivedColorMode } from '../types'
import merge from 'deepmerge'
import { ThemeProvider as EmThemeProvider } from '@emotion/react'
import { themeFactory } from './themeFactory'
import { defaultTheme } from '../defaultTheme'

interface Props {
	colorMode: DerrivedColorMode
	theme?: Partial<BaseTheme>
	children?: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = props => {
	const { colorMode, theme = {}, children } = props
	const themeFinal = themeFactory(merge(defaultTheme, theme), colorMode)

	return <EmThemeProvider theme={themeFinal}>{children}</EmThemeProvider>
}
