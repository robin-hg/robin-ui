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
		base: colors.red[900],
		onBase: colors.red[50],
		variant: colors.red[900],
		onVariant: colors.red[50]
	},
	warning: {
		base: colors.yellow[900],
		onBase: colors.yellow[50],
		variant: colors.yellow[900],
		onVariant: colors.yellow[50]
	},
	info: {
		base: colors.blue[900],
		onBase: colors.blue[50],
		variant: colors.blue[900],
		onVariant: colors.blue[50]
	},
	success: {
		base: colors.green[900],
		onBase: colors.green[50],
		variant: colors.green[900],
		onVariant: colors.green[50]
	},
	surface: {
		base: colors.gray[0],
		onBase: colors.gray[900],
		variant: colors.gray[200],
		onVariant: colors.gray[700]
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
		base: colors.red[500],
		onBase: colors.red[50],
		variant: colors.red[900],
		onVariant: colors.red[50]
	},
	warning: {
		base: colors.yellow[500],
		onBase: colors.yellow[50],
		variant: colors.yellow[900],
		onVariant: colors.yellow[50]
	},
	info: {
		base: colors.blue[500],
		onBase: colors.blue[50],
		variant: colors.blue[900],
		onVariant: colors.blue[50]
	},
	success: {
		base: colors.green[500],
		onBase: colors.green[50],
		variant: colors.green[900],
		onVariant: colors.green[50]
	},
	surface: {
		base: colors.dark[600],
		onBase: colors.dark[50],
		variant: colors.dark[800],
		onVariant: colors.dark[100]
	},
	background: {
		base: colors.dark[700],
		onBase: colors.dark[50]
	},
	outline: colors.dark[400]
}
