import { colors, white } from '../colors'
import type { Palette } from '../types'

export const lightPalette: Palette = {
  primary: {
    base: colors.blue[6],
    onBase: white,
    variant: colors.blue[3],
    onVariant: colors.blue[8]
  },
  secondary: {
    base: colors.teal[6],
    onBase: white,
    variant: colors.teal[2],
    onVariant: colors.teal[8]
  },
  critical: {
    base: colors.red[6],
    onBase: white,
    variant: colors.red[2],
    onVariant: colors.red[8]
  },
  warning: {
    base: colors.yellow[6],
    onBase: white,
    variant: colors.yellow[2],
    onVariant: colors.yellow[8]
  },
  success: {
    base: colors.green[6],
    onBase: white,
    variant: colors.green[2],
    onVariant: colors.green[8]
  },
  info: {
    base: colors.blue[6],
    onBase: white,
    variant: colors.blue[3],
    onVariant: colors.blue[8]
  },
  surface: {
    base: colors.neutral[1],
    onBase: colors.neutral[9],
    variant: colors.neutral[2],
    onVariant: colors.neutral[7]
  },
  background: {
    base: white,
    onBase: colors.neutral[7]
  },
  outline: colors.neutral[2],
  tint: colors.blue[3]
}

export const darkPalette: Palette = {
  primary: {
    base: colors.blue[3],
    onBase: colors.blue[9],
    variant: colors.blue[7],
    onVariant: colors.blue[2]
  },
  secondary: {
    base: colors.teal[3],
    onBase: colors.teal[9],
    variant: colors.teal[7],
    onVariant: colors.teal[2]
  },
  critical: {
    base: colors.red[3],
    onBase: colors.red[8],
    variant: colors.red[9],
    onVariant: colors.red[2]
  },
  warning: {
    base: colors.yellow[3],
    onBase: colors.yellow[8],
    variant: colors.yellow[9],
    onVariant: colors.yellow[2]
  },
  success: {
    base: colors.lime[3],
    onBase: colors.lime[8],
    variant: colors.lime[9],
    onVariant: colors.lime[2]
  },
  info: {
    base: colors.blue[3],
    onBase: colors.blue[8],
    variant: colors.blue[9],
    onVariant: colors.blue[2]
  },
  surface: {
    base: colors.neutral[9],
    onBase: colors.neutral[3],
    variant: colors.neutral[8],
    onVariant: colors.neutral[3]
  },
  background: {
    base: colors.neutral[10],
    onBase: colors.neutral[3]
  },
  outline: colors.neutral[7],
  tint: colors.blue[7]
}
