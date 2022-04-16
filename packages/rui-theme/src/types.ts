import type { CSSObject } from '@emotion/react'
import type { SX } from '@rui/styles'
import { themeFactory } from './ThemeProvider/themeFactory'

export type ColorMode = 'light' | 'dark' | 'system'
export type DerrivedColorMode = 'light' | 'dark'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SizeValue = Size | string | number

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

export interface TypographyProperties<V extends Size> {
	fontFamily: React.CSSProperties['fontFamily']
	fontWeight: React.CSSProperties['fontWeight']
	fontSize: Record<V, React.CSSProperties['fontSize']>
	lineHeight: Record<V, React.CSSProperties['lineHeight']>
}

export interface BaseTheme {
	global: SX
	componentStyles: Record<string, CSSObject>
	breakpoints: Record<Size, number | string>
	spacing: Record<Size, number | string>
	typography: {
		heading: TypographyProperties<Size>
		text: TypographyProperties<Size>
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

type Media = Record<Size, string>

export type AugumentedTheme = BaseTheme & {
	colorMode: 'light' | 'dark'
	palette: Palette
	media: Media
}

export interface RUITheme extends AugumentedTheme {
	fn: ReturnType<typeof themeFactory>['fn']
}
