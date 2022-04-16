import { colors } from './colors'
import { lightPalette, darkPalette } from './palette'
import { heading, text, label } from './typography'
import type { BaseTheme } from '../types'

export const defaultTheme: BaseTheme = {
	global: {},
	componentStyles: {},
	breakpoints: {
		xl: 1536,
		lg: 1200,
		md: 900,
		sm: 600,
		xs: 0
	},
	spacing: {
		xl: '3.6rem',
		lg: '2.4rem',
		md: '1.6rem',
		sm: '0.8rem',
		xs: '0.4rem'
	},
	typography: {
		heading,
		text,
		label
	},
	colors,
	lightPalette,
	darkPalette,
	colorModifiers: {
		tint: 0.08,
		hover: 0.08,
		focus: 0.08,
		active: 0.12,
		disabledBase: 0.12,
		disabledOnBase: 0.5
	},
	borderRadius: '0.8rem',
	transition: {
		duration: '200ms',
		timing: 'ease-out'
	},
	shadow: {
		color: 'rgba(0, 0, 0, 0.10)',
		generateShadow: function (elevation: number) {
			if (elevation <= 0) {
				return 'none'
			}

			return `0 ${elevation * 2}px ${elevation * 3}px ${elevation}px ${this.color}`
		}
	}
}
