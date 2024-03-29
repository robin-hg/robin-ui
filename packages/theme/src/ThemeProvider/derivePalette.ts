import { colord } from '@robin-ui/utils'

import type { Palette, PaletteColorWithVariant } from '../types'

const keys = ['primary', 'secondary']

const deriveColor = (referenceColor: string, color: string) => {
  const reference = colord(referenceColor).toLch()
  const { h: hue } = colord(color).toLch()
  return colord({ ...reference, h: hue }).toHex()
}

export const derivePalette = (dynamicColor: string | [string, string], basePalette: Palette) => {
  const colorArray = typeof dynamicColor === 'string' ? [dynamicColor] : dynamicColor

  return Object.fromEntries(
    colorArray.map((color, i) => {
      const key = keys[i]
      const reference = basePalette[key]

      let value: PaletteColorWithVariant
      if (reference instanceof Object && 'variant' in reference) {
        value = {
          base: deriveColor(reference.base, color),
          onBase: deriveColor(reference.onBase, color),
          variant: deriveColor(reference.variant, color),
          onVariant: deriveColor(reference.onVariant, color)
        }
      } else {
        value = {
          base: color,
          onBase: color,
          variant: color,
          onVariant: color
        }
      }
      return [key, value]
    })
  )
}
