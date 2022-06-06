import { colors } from './colors'
import { lightPalette, darkPalette } from './palette'
import { heading, text, label } from './typography'
import type { BaseTheme } from '../types'

export const defaultTheme: BaseTheme = {
	global: {},
	componentStyles: {},
	breakpoints: {
		xs: 320,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1440
	},
	spacing: {
		xs: '0.4rem',
		sm: '0.8rem',
		md: '1.6rem',
		lg: '2.4rem',
		xl: '3.6rem'
	},
	radius: {
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
		backgroundTint: 0.02,
		tint: 0.05,
		hover: 0.08,
		focus: 0.12,
		active: 0.15,
		fadedBase: 0.12,
		fadedOnBase: 0.5
	},
	transition: {
		duration: '200ms',
		ease: 'ease-out'
	},
	shadow: {
		color: '#0000001A',
		generateShadow(elevation: number) {
			if (elevation <= 0) {
				return 'none'
			}

			return `0 ${elevation * 2}px ${elevation * 3}px ${elevation}px ${this.color}`
		}
	}
}
