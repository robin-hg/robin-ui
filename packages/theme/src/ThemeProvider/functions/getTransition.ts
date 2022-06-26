import type { BaseTheme } from '../../types'

type Properties =
  | NonNullable<React.CSSProperties['transitionProperty']>
  | NonNullable<React.CSSProperties['transitionProperty']>[]

export const getTransition =
  (theme: BaseTheme) =>
  (properties: Properties = 'all', duration?: number) => {
    const props = Array.isArray(properties) ? properties : [properties]
    return props
      .map(
        property =>
          `${property} ${duration ?? theme.transition.duration}ms ${theme.transition.ease}`
      )
      .join(', ')
  }
