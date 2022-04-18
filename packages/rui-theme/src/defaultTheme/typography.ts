import type { TypographyProperties, Size } from '../types'

export const heading: TypographyProperties<Size> = {
	fontFamily: '"Noto Serif", Arial, sans-serif',
	fontWeight: 400,
	fontSize: {
		xs: '2.8rem',
		sm: '3.2rem',
		md: '3.6rem',
		lg: '5.2rem',
		xl: '5.7rem'
	},
	lineHeight: {
		xs: 1.28,
		sm: 1.25,
		md: 1.22,
		lg: 1.16,
		xl: 1.12
	}
}

export const text: TypographyProperties<Size> = {
	fontFamily: '"Noto Sans", Arial, sans-serif',
	fontWeight: 400,
	fontSize: {
		xs: '1.2rem',
		sm: '1.4rem',
		md: '1.6rem',
		lg: '1.8rem',
		xl: '2.2rem'
	},
	lineHeight: {
		xs: 1.33,
		sm: 1.42,
		md: 1.5,
		lg: 1.4,
		xl: 1.28
	}
}

export const label: TypographyProperties<'sm' | 'md' | 'lg'> = {
	fontFamily: '"Noto Sans", Arial, sans-serif',
	fontWeight: 500,
	fontSize: {
		sm: '1.1rem',
		md: '1.2rem',
		lg: '1.4rem'
	},
	lineHeight: {
		sm: 0.6,
		md: 1.33,
		lg: 1.42
	}
}
