import type { DerrivedColorMode } from '../types'
import { generateShades } from '@robin-ui/utils'
import { white } from '../colors'

const keys = ['primary', 'secondary']

const lightIndex = {
  base: 6,
  onBase: 0,
  variant: 3,
  onVariant: 8
}

const darkIndex = {
  base: 3,
  onBase: 9,
  variant: 7,
  onVariant: 2
}

export const generatePalette = (
  dynamicColor: string | [string, string],
  colorMode: DerrivedColorMode
) => {
  const index = colorMode === 'light' ? lightIndex : darkIndex
  const colorArray = typeof dynamicColor === 'string' ? [dynamicColor] : dynamicColor

  return Object.fromEntries(
    colorArray.map((color, i) => {
      const shades = generateShades(color)
      return [
        keys[i],
        {
          base: index.base === 0 ? white : shades[index.base],
          onBase: index.onBase === 0 ? white : shades[index.onBase],
          variant: index.variant === 0 ? white : shades[index.variant],
          onVariant: index.onVariant === 0 ? white : shades[index.onVariant]
        }
      ]
    })
  )
}
