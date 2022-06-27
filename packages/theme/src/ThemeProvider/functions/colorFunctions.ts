import { colord, get, memoize } from '@robin-ui/utils'
import type { AugumentedTheme, ColorToken, Modifier } from '../../types'

export const getColorFunctions = (theme: AugumentedTheme) => {
  const getColor = memoize((color: ColorToken) => {
    const [base, shade] = color.split('.')
    return get(theme.palette, [base, shade || 'base'], get(theme.palette, [base], color))
  })

  return {
    getColor,
    getAlphaColor: memoize((color: ColorToken, modifier: Modifier | number) => {
      const c = getColor(color)
      return colord(c)
        .alpha(typeof modifier === 'number' ? modifier : theme.colorModifiers[modifier])
        .toHex()
    }),
    getOnColor: memoize((background: ColorToken) => {
      const [base, variant = 'base'] = background.split('.')
      const v = variant === 'base' ? 'onBase' : 'onVariant'
      const onColor = get<string | undefined>(theme.palette, [base, v])

      if (onColor) {
        return onColor
      }

      const backgroundColor = getColor(background)
      const baseContrast = colord(backgroundColor).contrast(theme.palette.surface.base)
      const onBaseContrast = colord(backgroundColor).contrast(theme.palette.surface.onBase)

      return baseContrast > onBaseContrast
        ? theme.palette.surface.base
        : theme.palette.surface.onBase
    }),
    getMixedColor: memoize(
      (background: ColorToken, color: ColorToken, ratio: Modifier | number) => {
        const backgrounColor = getColor(background)
        const layerColor = getColor(color)
        return colord(backgrounColor)
          .mix(layerColor, typeof ratio === 'number' ? ratio : theme.colorModifiers[ratio])
          .toHex()
      }
    )
  }
}
