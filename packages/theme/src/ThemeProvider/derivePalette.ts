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
      const reference = basePalette[key] as PaletteColorWithVariant
      return [
        key,
        {
          base: deriveColor(reference.base, color),
          onBase: deriveColor(reference.onBase, color),
          variant: deriveColor(reference.variant, color),
          onVariant: deriveColor(reference.onVariant, color)
        }
      ]
    })
  )
}
