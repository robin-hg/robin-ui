import { colors } from './colors'
import type { Palette } from '../types'

export const lightPalette: Palette = {
	primary: {
		base: colors.blue[600],
		onBase: colors.blue[0],
		variant: colors.blue[300],
		onVariant: colors.gray[800]
	},
	secondary: {
		base: colors.red[600],
		onBase: colors.red[0],
		variant: colors.red[300],
		onVariant: colors.gray[800]
	},
	critical: {
		base: colors.red[300],
		onBase: colors.red[900],
		variant: colors.gray[700],
		onVariant: colors.gray[50]
	},
	warning: {
		base: colors.yellow[300],
		onBase: colors.yellow[900],
		variant: colors.gray[700],
		onVariant: colors.gray[50]
	},
	info: {
		base: colors.green[800],
		onBase: colors.green[50],
		variant: colors.gray[700],
		onVariant: colors.gray[50]
	},
	success: {
		base: colors.green[300],
		onBase: colors.green[900],
		variant: colors.gray[700],
		onVariant: colors.gray[50]
	},
	surface: {
		base: colors.gray[0],
		onBase: colors.gray[700],
		variant: colors.gray[200],
		onVariant: colors.gray[900]
	},
	background: {
		base: colors.gray[0],
		onBase: colors.gray[700]
	},
	outline: colors.gray[400]
}

export const darkPalette: Palette = {
	primary: {
		base: colors.blue[600],
		onBase: colors.blue[0],
		variant: colors.blue[300],
		onVariant: colors.gray[800]
	},
	secondary: {
		base: colors.blue[600],
		onBase: colors.blue[0],
		variant: colors.blue[300],
		onVariant: colors.gray[800]
	},
	critical: {
		base: colors.red[800],
		onBase: colors.red[50],
		variant: colors.gray[700],
		onVariant: colors.gray[50]
	},
	warning: {
		base: colors.yellow[800],
		onBase: colors.yellow[50],
		variant: colors.gray[700],
		onVariant: colors.gray[50]
	},
	info: {
		base: colors.green[800],
		onBase: colors.green[50],
		variant: colors.gray[700],
		onVariant: colors.gray[50]
	},
	success: {
		base: colors.green[800],
		onBase: colors.green[50],
		variant: colors.gray[700],
		onVariant: colors.gray[50]
	},
	surface: {
		base: colors.gray[800],
		onBase: colors.gray[50],
		variant: colors.gray[700],
		onVariant: colors.gray[50]
	},
	background: {
		base: colors.gray[800],
		onBase: colors.gray[50]
	},
	outline: colors.gray[600]
}
