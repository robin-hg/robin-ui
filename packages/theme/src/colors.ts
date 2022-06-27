import { generateShades } from '@robin-ui/utils'

type Intensity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type ColorObj = Record<Intensity, string>

const baseColors = {
  neutral: '#495057',
  red: '#f03e3e',
  pink: '#d6336c',
  purple: '#ae3ec9',
  violet: '#7048e8',
  indigo: '#4263eb',
  blue: '#1c7ed6',
  cyan: '#1098ad',
  teal: '#0ca678',
  green: '#37b24d',
  lime: '#74b816',
  yellow: '#f59f00',
  orange: '#f76707'
}

export const colors = Object.fromEntries(
  Object.entries(baseColors).map(([colorName, baseColor]) => {
    const palette = Object.fromEntries(
      generateShades(baseColor).map((color, i) => [i + 1, color])
    ) as ColorObj
    return [colorName, palette]
  })
) as Record<keyof typeof baseColors, ColorObj>

export const black = '#000000'
export const white = '#ffffff'
