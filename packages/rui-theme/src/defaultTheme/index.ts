import { colors } from './colors'
import { lightPalette, darkPalette } from './palette'
import { heading, text, label } from './typography'
import type { BaseTheme } from '../types'

export const defaultTheme: BaseTheme = {
	global: {},
	componentStyles: {},
	breakpoints: {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	},
	size: {
		xs: '1.6rem',
		sm: '2rem',
		md: '2.4rem',
		lg: '3.2rem',
		xl: '4.4rem'
	},
	spacing: {
		xs: '0.4rem',
		sm: '0.8rem',
		md: '1.6rem',
		lg: '2.4rem',
		xl: '3.6rem'
	},
	borderRadius: {
		xs: 0,
		sm: '0.4rem',
		md: '0.8rem',
		lg: '1.6rem',
		xl: '999px'
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
		base: 0.02,
		tint: 0.05,
		hover: 0.08,
		focus: 0.12,
		active: 0.15,
		disabledBase: 0.12,
		disabledOnBase: 0.5
	},
	transition: {
		duration: '200ms',
		ease: 'ease-out'
	},
	shadow: {
		color: 'rgba(0, 0, 0, 0.10)',
		generateShadow(elevation: number) {
			if (elevation <= 0) {
				return 'none'
			}

			return `0 ${elevation * 2}px ${elevation * 3}px ${elevation}px ${this.color}`
		}
	}
}
