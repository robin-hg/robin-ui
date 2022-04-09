import type { CSSObject, Theme } from '@emotion/react'
import { themeFactory } from './ThemeProvider/themeFactory'

export type ColorMode = 'light' | 'dark' | 'system'
export type DerrivedColorMode = 'light' | 'dark'

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type DefaultColors =
	| 'gray'
	| 'red'
	| 'pink'
	| 'violet'
	| 'indigo'
	| 'blue'
	| 'cyan'
	| 'teal'
	| 'green'
	| 'lime'
	| 'yellow'
	| 'orange'

export interface ColorObj {
	0: string
	50: string
	100: string
	200: string
	300: string
	400: string
	500: string
	600: string
	700: string
	800: string
	900: string
}

interface PaletteColor {
	base: string
	onBase: string
}

interface PaletteColorWithVariant {
	base: string
	onBase: string
	variant: string
	onVariant: string
}

export interface AdditionalColors extends Record<string, string | PaletteColor | PaletteColorWithVariant> {}

export interface Palette extends AdditionalColors {
	primary: PaletteColorWithVariant
	secondary: PaletteColorWithVariant
	critical: PaletteColorWithVariant
	warning: PaletteColorWithVariant
	info: PaletteColorWithVariant
	success: PaletteColorWithVariant
	surface: PaletteColorWithVariant
	background: PaletteColor
	outline: string
}

interface TypographyVariant {
	fontSize: React.CSSProperties['fontSize']
	lineHeight: React.CSSProperties['lineHeight']
}

export interface TypographyProperties<V extends Sizes> {
	fontFamily: React.CSSProperties['fontFamily']
	fontWeight: React.CSSProperties['fontWeight']
	sizes: Record<V, TypographyVariant>
}

export interface RUITheme {
	componentStyles: Record<string, CSSObject | ((theme: Theme) => CSSObject)>
	breakpoints: Record<Sizes, number | string>
	spacing: Record<Sizes, number | string>
	typography: {
		heading: TypographyProperties<Sizes>
		text: TypographyProperties<Sizes>
		label: TypographyProperties<'lg' | 'md' | 'sm'>
	}
	colors: Record<DefaultColors, ColorObj>
	lightPalette: Palette
	darkPalette: Palette
	colorModifiers: {
		tint: number
		hover: number
		active: number
		disabled: {
			base: number
			onBase: number
		}
	}
	borderRadius: React.CSSProperties['borderRadius']
	transition: {
		duration: React.CSSProperties['transitionDuration']
		timing: React.CSSProperties['transitionTimingFunction']
	}
	shadow: {
		color: string
		generateShadow: (elevation: number) => React.CSSProperties['boxShadow']
	}
}

export interface RUIThemeExtended extends RUITheme {
	colorMode: 'light' | 'dark'
	palette: Palette
	media: ReturnType<typeof themeFactory>['media']
	fn: ReturnType<typeof themeFactory>['fn']
}
