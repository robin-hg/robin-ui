import merge from 'deepmerge'
import { ThemeProvider, Global } from '@emotion/react'
import globalStyle from './global'

import { blue, deepPurple, red, amber, lightBlue, lightGreen, grey } from './colors'

export type RUITheme = typeof lightTheme

const generateShadow = (elevation: number, color: string, downShift = true) => {
	if (elevation <= 0) {
		return 'none'
	}

	return `0 ${downShift ? elevation * 2 : 0}px ${elevation * 2}px ${elevation * 1}px ${color}`
}

export const lightTheme = {
	darkMode: false,
	breakpoints: {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	},
	typography: {
		fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
		fontWeights: {
			heading: 600,
			subtitle: 500,
			body: 400,
			button: 500,
			link: 500,
			bold: 600
		},
		fontSizes: {
			h1: '8rem',
			h2: '6rem',
			h3: '4.8rem',
			h4: '3.2rem',
			h5: '2.4rem',
			h6: '2rem',
			subtitle1: '1.8rem',
			subtitle2: '1.6rem',
			body1: '1.6rem',
			body2: '1.4rem',
			caption: '1.2rem',
			buttonSm: '1.3rem',
			buttonMd: '1.6rem',
			buttonLg: '1.8rem',
			link: '1.6rem'
		}
	},
	colors: {
		primary: blue,
		secondary: deepPurple,
		error: red,
		warning: amber,
		info: lightBlue,
		success: lightGreen,
		grey,
		text: {
			primary: 'rgba(0, 0, 0, 0.9)',
			secondary: 'rgba(0, 0, 0, 0.6)',
			disabled: 'rgba(0, 0, 0, 0.4)',
			contrast: '#FFF'
		},
		paper: {
			primary: '#FFF',
			secondary: grey[100]
		},
		shadow: 'rgba(0, 0, 0, 0.1)'
	},
	borderRadius: '0.5rem',
	generateShadow
}

export const darkTheme = merge(lightTheme, {
	darkMode: true,
	colors: {
		text: {
			primary: '#FFF',
			secondary: 'rgba(255, 255, 255, 0.7)',
			disabled: 'rgba(255, 255, 255, 0.5)',
			contrast: 'rgba(0, 0, 0, 0.9)'
		},
		paper: {
			primary: '#121212',
			secondary: '#212121'
		}
	}
})

interface Props {
	mode?: 'light' | 'dark'
	theme?: Partial<RUITheme>
	excludeGlobal?: boolean
}

export const RUIThemeProvider: React.FC<Props> = props => {
	const { mode = 'light', theme = {}, excludeGlobal, children } = props
	const baseTheme = mode === 'light' ? lightTheme : darkTheme

	return (
		<ThemeProvider theme={merge(baseTheme, theme)}>
			{!excludeGlobal && <Global styles={globalStyle} />}
			{children}
		</ThemeProvider>
	)
}
