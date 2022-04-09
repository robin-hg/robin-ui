import colors from './colors'
import { lightPalette, darkPalette } from './palette'
import { heading, text, label } from './typography'
import type { RUITheme } from '../types'

export const defaultTheme: RUITheme = {
	componentStyles: {},
	breakpoints: {
		xl: 1536,
		lg: 1200,
		md: 900,
		sm: 600,
		xs: 0
	},
	spacing: {
		xl: '1.6rem',
		lg: '1.2rem',
		md: '0.8rem',
		sm: '0.4rem',
		xs: '0.2rem'
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
		active: 0.12,
		disabled: {
			base: 0.12,
			onBase: 0.38
		}
	},
	borderRadius: '0.8rem',
	transition: {
		duration: '200ms',
		timing: 'ease-out'
	},
	shadow: {
		color: 'rgba(0, 0, 0, 0.2)',
		generateShadow: function (elevation: number) {
			if (elevation <= 0) {
				return 'none'
			}

			return `0 ${elevation * 1}px ${elevation * 2}px ${elevation * 1}px ${this.color}`
		}
	}
}
