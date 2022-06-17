import { range } from '../range'

import { colord as _colord, extend } from 'colord'
import lchPlugin from 'colord/plugins/lch'
import mixPlugin from 'colord/plugins/mix'
import a11yPlugin from 'colord/plugins/a11y'

extend([lchPlugin, mixPlugin, a11yPlugin])

export const colord = _colord

export const generatePalette = (baseColor: string) => {
	const lch = colord(baseColor).toLch()
	const palette = range(1, 10).map(i => {
		const fixedLightness = i * 10 - 5
		const chromaRatio = (i > 5 ? Math.abs(i - 12) : i) * 0.2

		return colord({ l: fixedLightness, c: lch.c * chromaRatio, h: lch.h }).toHex()
	})
	return palette
}
