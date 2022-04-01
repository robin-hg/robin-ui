import merge from 'deepmerge'

import * as colors from './colors'

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
		headingFontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
		fontWeights: {
			heading: 600,
			subtitle: 500,
			body: 400,
			bold: 600
		},
		lineHeight: {
			heading: '1.4em',
			subtitle: '1.4em',
			body: '1.5em',
			caption: '1.5em'
		},
		fontSizes: {
			h1: '6.8rem',
			h2: '5.6rem',
			h3: '4.4rem',
			h4: '3.2rem',
			h5: '2.4rem',
			h6: '2rem',
			subtitle: '2rem',
			body: '1.5rem',
			caption: '1.2rem',
			button: '1.4rem'
		},
		colors: {
			base: colors.dark[8],
			light: colors.gray[6],
			contrast: colors.gray[0],
			disabled: colors.gray[5]
		}
	},
	paper: {
		base: '#fff',
		secondary: colors.gray[0],
		disabled: colors.gray[1],
		border: colors.gray[4]
	},
	background: '#fff',
	colors: {
		primary: colors.blue,
		error: colors.red,
		...colors
	},
	borderRadius: '0.4rem',
	shadow: {
		color: 'rgba(0, 0, 0, 0.1)',
		generateShadow: function (elevation: number) {
			if (elevation <= 0) {
				return 'none'
			}

			return `0 ${elevation * 1}px ${elevation * 2}px ${elevation * 1}px ${this.color}`
		}
	}
}

export const darkTheme = merge(lightTheme, {
	darkMode: true,
	background: colors.dark[8],
	typography: {
		colors: {
			base: colors.gray[0],
			light: colors.gray[5],
			contrast: colors.dark[8],
			disabled: colors.dark[3]
		}
	},
	paper: {
		base: colors.dark[7],
		secondary: colors.dark[6],
		disabled: colors.dark[7],
		border: colors.dark[5]
	}
})

export type RUITheme = typeof lightTheme
