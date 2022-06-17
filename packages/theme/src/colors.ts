import { generatePalette } from '@robin-ui/utils'

type Intensity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
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
			generatePalette(baseColor).map((color, i) => [(i + 1) * 10, color])
		) as ColorObj
		return [colorName, palette]
	})
) as Record<BaseColor, ColorObj>
