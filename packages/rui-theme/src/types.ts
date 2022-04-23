import type { CSSObject } from '@emotion/react'
import type { SX } from '@rui/styles'
import { createThemeFunctions } from './ThemeProvider/functions'

export type ColorMode = 'light' | 'dark' | 'system'
export type DerrivedColorMode = 'light' | 'dark'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SizeValue = Size | string | number
export type ConstrainedSize = 'sm' | 'md' | 'lg'
export type ConstrainedSizeValue = ConstrainedSize | string | number

export type Modifier = 'tint' | 'hover' | 'focus' | 'active' | 'disabledBase' | 'disabledOnBase'

type DefaultColor =
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

export interface AdditionalColors extends Record<string, ColorObj> {}

interface PaletteColor {
	base: string
	onBase: string
}

interface PaletteColorWithVariant extends PaletteColor {
	variant: string
	onVariant: string
}

type PaletteKey = 'background'
type PaletteKeyWithVariant = 'primary' | 'secondary' | 'critical' | 'warning' | 'info' | 'success' | 'surface'

// TODO: Test additional keys
export interface AdditionalPalette extends Record<string, string | PaletteColor | PaletteColorWithVariant> {}

interface DefaultPalette
	extends Record<PaletteKey, PaletteColor>,
		Record<PaletteKeyWithVariant, PaletteColorWithVariant> {
	outline: string
}

export type Palette = DefaultPalette & AdditionalPalette

export type ColorToken =
	| `${keyof DefaultPalette}`
	| `${PaletteKeyWithVariant}.${keyof PaletteColorWithVariant}`
	| `${PaletteKey}.${keyof PaletteColor}`
	| `${DefaultColor}.${keyof ColorObj}`
	| (`${keyof AdditionalPalette}` & Record<never, never>)
	| (string & Record<never, never>)

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
	borderRadius: Record<Size, React.CSSProperties['borderRadius']>
	typography: {
		heading: TypographyProperties<Size>
		text: TypographyProperties<Size>
		label: TypographyProperties<ConstrainedSize>
	}
	colors: Record<DefaultColor, ColorObj> & AdditionalColors
	lightPalette: Palette
	darkPalette: Palette
	colorModifiers: Record<Modifier, number>
	transition: {
		duration: React.CSSProperties['transitionDuration']
		ease: React.CSSProperties['transitionTimingFunction']
	}
	shadow: {
		color: string
		generateShadow: (elevation: number) => React.CSSProperties['boxShadow']
	}
}

export type AugumentedTheme = BaseTheme & {
	colorMode: 'light' | 'dark'
	palette: Palette
	media: Record<Size, string>
}

export interface RUITheme extends AugumentedTheme {
	fn: ReturnType<typeof createThemeFunctions>
}
