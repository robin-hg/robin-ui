import type { BaseTheme } from '../../types'

export interface TransitionOptions {
  properties?: React.CSSProperties['transitionProperty'][]
  duration?: string | number
}

type Properties =
  | NonNullable<React.CSSProperties['transitionProperty']>
  | NonNullable<React.CSSProperties['transitionProperty']>[]

const parseDuration = (value: number | string) => (typeof value === 'number' ? `${value}ms` : value)

export const getTransition =
  (theme: BaseTheme) =>
  (properties: Properties = 'all', duration?: string | number) => {
    const props = Array.isArray(properties) ? properties : [properties]
    return props
      .map(
        property =>
          `${property} ${parseDuration(duration ?? theme.transition.duration)} ${
            theme.transition.ease
          }`
      )
      .join(', ')
  }
