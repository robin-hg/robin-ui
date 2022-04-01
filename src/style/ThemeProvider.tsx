import { ThemeProvider, type CSSObject } from '@emotion/react'
import merge from 'deepmerge'
import { getColor, getTextColor, getColorAlpha, getColorVariant } from '@rui/utils/color'
import { lightTheme, darkTheme } from './theme'
import Global from './Global'

const ThemeFactory = (theme: RobinUI.Theme) => {
	const createMediaCss = (breakpoint: 'sm' | 'md' | 'lg' | 'xl') =>
		`@media screen and (max-width: ${theme.breakpoints[breakpoint] - 1}px)`

	const utils = {
		getColor: (color: string) => getColor(theme, color),
		getTextColor: (background?: string, colors?: string[]) => getTextColor(theme, background, colors),
		getColorAlpha: (color: string, alpha: number) => getColorAlpha(theme, color, alpha),
		getColorVariant: (color: string, variant: number) => getColorVariant(theme, color, variant)
	}

	const media = {
		sm: createMediaCss('sm'),
		md: createMediaCss('md'),
		lg: createMediaCss('lg'),
		xl: createMediaCss('xl')
	}

	return {
		...theme,
		utils,
		media
	}
}

interface Props {
	mode?: 'light' | 'dark'
	theme?: Partial<RobinUI.Theme>
	excludeGlobal?: boolean
	globalStyles?: (theme: RobinUI.Theme) => CSSObject
}

export type RUIThemeWithUtils = ReturnType<typeof ThemeFactory>
export const RUIThemeProvider: React.FC<Props> = props => {
	const { mode = 'light', theme = {}, excludeGlobal, globalStyles, children } = props
	const defaultTheme = mode === 'light' ? lightTheme : darkTheme
	const themeWithUrils = ThemeFactory(merge(defaultTheme, theme))

	return (
		<ThemeProvider theme={themeWithUrils}>
			{!excludeGlobal && <Global styles={globalStyles} />}
			{children}
		</ThemeProvider>
	)
}
