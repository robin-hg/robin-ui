import { generatePalette } from '@robin-ui/utils'

type Intensity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

type ColorObj = Record<Intensity, string>

type BaseColor =
	| 'neutral'
	| 'red'
	| 'pink'
	| 'purple'
	| 'violet'
	| 'indigo'
	| 'blue'
	| 'cyan'
	| 'teal'
	| 'green'
	| 'lime'
	| 'yellow'
	| 'orange'

const baseColors: Record<BaseColor, string> = {
	neutral: '#495057',
	red: '#f03e3e',
	pink: '#d6336c',
	purple: '#ae3ec9',
	violet: '#7048e8',
	indigo: '#4263eb',
	blue: '#1c7ed6',
	cyan: '#1098ad',
	teal: '#0ca678',
	green: '#37b24d',
	lime: '#74b816',
	yellow: '#f59f00',
	orange: '#f76707'
}

export const colors = Object.fromEntries(
	Object.entries(baseColors).map(([colorName, baseColor]) => {
		const palette = Object.fromEntries(
			generatePalette(baseColor).map((color, i) => [i + 1, color])
		) as ColorObj
		return [colorName, palette]
	})
) as Record<BaseColor, ColorObj>

export const black = '#000000'
export const white = '#ffffff'
