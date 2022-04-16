import type { TypographyProperties, Size } from '../types'

export const heading: TypographyProperties<Size> = {
	fontFamily: '"Noto Serif", Arial, sans-serif',
	fontWeight: 400,
	fontSize: {
		xl: '5.7rem',
		lg: '5.2rem',
		md: '3.6rem',
		sm: '3.2rem',
		xs: '2.8rem'
	},
	lineHeight: {
		xl: 1.12,
		lg: 1.16,
		md: 1.22,
		sm: 1.25,
		xs: 1.28
	}
}

export const text: TypographyProperties<Size> = {
	fontFamily: '"Noto Sans", Arial, sans-serif',
	fontWeight: 400,
	fontSize: {
		xl: '2.2rem',
		lg: '1.8rem',
		md: '1.6rem',
		sm: '1.4rem',
		xs: '1.2rem'
	},
	lineHeight: {
		xl: 1.28,
		lg: 1.4,
		md: 1.5,
		sm: 1.42,
		xs: 1.33
	}
}

export const label: TypographyProperties<'lg' | 'md' | 'sm'> = {
	fontFamily: '"Noto Sans", Arial, sans-serif',
	fontWeight: 500,
	fontSize: {
		lg: '1.4rem',
		md: '1.2rem',
		sm: '1.1rem'
	},
	lineHeight: {
		lg: 1.42,
		md: 1.33,
		sm: 0.6
	}
}
