import type { BaseTheme } from '../types'

import { darkPalette, lightPalette } from './palette'
import { code, heading, label, text } from './typography'

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
    label,
    code
  },
  lightPalette,
  darkPalette,
  colorModifiers: {
    backgroundTint: 0.03,
    surfaceTint: 0.08,
    faded: 0.15,
    hover: 0.18,
    focus: 0.18,
    active: 0.24,
    disabled: 0.5
  },
  transition: {
    duration: 200,
    ease: 'ease-out'
  },
  shadow: {
    color: '#0000001f',
    generateShadow(elevation: number) {
      if (elevation <= 0) {
        return 'none'
      }

      return `0 ${elevation * 2}px ${elevation * 3}px ${elevation}px ${this.color}`
    }
  }
}
