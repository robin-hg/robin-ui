import { colord as _colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import lchPlugin from 'colord/plugins/lch'
import mixPlugin from 'colord/plugins/mix'

import { range } from '../range'

extend([lchPlugin, mixPlugin, a11yPlugin])

export const colord = _colord

export const generateShades = (baseColor: string, steps = 10) => {
  const lch = colord(baseColor).toLch()
  const palette = range(steps, 1).map(i => {
    const half = steps / 2
    const fixedLightness = Math.round(i * (100 / steps) - half)
    const chromaRatio = (i > half ? Math.abs(i - steps * 1.2) : i) / half

    return colord({ l: fixedLightness, c: lch.c * chromaRatio, h: lch.h }).toHex()
  })
  return palette
}
