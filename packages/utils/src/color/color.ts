import { range } from '../range'

import { colord as _colord, extend } from 'colord'
import lchPlugin from 'colord/plugins/lch'
import mixPlugin from 'colord/plugins/mix'
import a11yPlugin from 'colord/plugins/a11y'

extend([lchPlugin, mixPlugin, a11yPlugin])

export const colord = _colord

export const generatePalette = (baseColor: string, steps = 10) => {
  const lch = colord(baseColor).toLch()
  const palette = range(steps, 1).map(i => {
    const half = steps / 2
    const fixedLightness = i * steps - half
    const chromaRatio = (i > half ? Math.abs(i - steps * 1.2) : i) / half

    return colord({ l: fixedLightness, c: lch.c * chromaRatio, h: lch.h }).toHex()
  })
  return palette
}
