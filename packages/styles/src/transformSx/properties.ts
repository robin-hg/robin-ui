const supportedColorProperties = [
  'background',
  'backgroundColor',
  'border',
  'borderColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'color',
  'outline',
  'outlineColor',
  'textDecoration',
  'textDecorationColor',
  'fill',
  'stroke'
] as const
export const colorProperties = new Set<string>(supportedColorProperties)
export type SupportedColorProp = typeof supportedColorProperties[number]

const supportedSpacingProperties = [
  'gap',
  'columnGap',
  'rowGap',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'top',
  'right',
  'bottom',
  'left'
] as const
export const spacingProperties = new Set<string>(supportedSpacingProperties)
export type SupportedSpacingProp = typeof supportedSpacingProperties[number]
