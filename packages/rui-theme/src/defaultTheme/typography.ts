import type { TypographyProperties, Sizes } from '../types'

export const heading: TypographyProperties<Sizes> = {
	fontFamily: '"Noto Serif", Arial, sans-serif',
	fontWeight: 400,
	sizes: {
		xl: {
			fontSize: '5.7rem',
			lineHeight: 1.12
		},
		lg: {
			fontSize: '5.2rem',
			lineHeight: 1.16
		},
		md: {
			fontSize: '3.6rem',
			lineHeight: 1.22
		},
		sm: {
			fontSize: '3.2rem',
			lineHeight: 1.25
		},
		xs: {
			fontSize: '2.8rem',
			lineHeight: 1.28
		}
	}
}

export const text: TypographyProperties<Sizes> = {
	fontFamily: '"Noto Sans", Arial, sans-serif',
	fontWeight: 400,
	sizes: {
		xl: {
			fontSize: '2.2rem',
			lineHeight: 1.28
		},
		lg: {
			fontSize: '1.8rem',
			lineHeight: 1.4
		},
		md: {
			fontSize: '1.6rem',
			lineHeight: 1.5
		},
		sm: {
			fontSize: '1.4rem',
			lineHeight: 1.42
		},
		xs: {
			fontSize: '1.2rem',
			lineHeight: 1.33
		}
	}
}

export const label: TypographyProperties<'lg' | 'md' | 'sm'> = {
	fontFamily: '"Noto Sans", Arial, sans-serif',
	fontWeight: 500,
	sizes: {
		lg: {
			fontSize: '1.4rem',
			lineHeight: 1.42
		},
		md: {
			fontSize: '1.2rem',
			lineHeight: 1.33
		},
		sm: {
			fontSize: '1.1rem',
			lineHeight: 0.6
		}
	}
}
