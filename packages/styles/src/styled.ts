import _emotionStyled, { type Interpolation } from '@emotion/styled'

import { transformSx } from './transformSx'
import type {
  BaseCreateStyled,
  CreateStyled,
  SXComponents,
  StyleProps,
  StyledOptions,
  StyledTags
} from './types'

// Workaround for commonjs interop with default exports
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const emotionStyled = (_emotionStyled.default ?? _emotionStyled) as CreateStyled

const excludedProps = new Set(['sx', 'css', 'as'])

const shouldForwardProp = (prop: string) => !excludedProps.has(prop) && !prop.startsWith('$')

const augumentStyle = <P extends StyleProps>(props: P, label = '') => {
  const { sx, theme } = props
  const themeSx = theme.componentStyles[label]
  return [transformSx(themeSx), transformSx(sx)]
}

const baseStyled: BaseCreateStyled =
  (component: React.ComponentType, options?: StyledOptions) =>
  <P extends StyleProps>(...styles: Interpolation<P>[]) => {
    if (options?.shouldForwardProp) {
      options.shouldForwardProp = shouldForwardProp
    }

    return emotionStyled(component, options)(...styles, augumentStyle)
  }

const tags = Object.keys(emotionStyled) as (keyof JSX.IntrinsicElements)[]
const styledTags = tags.reduce((acc, tag) => ({ ...acc, [tag]: baseStyled(tag) }), {}) as StyledTags
export const sxc = tags.reduce(
  (acc, tag) => ({ ...acc, [tag]: baseStyled(tag)() }),
  {}
) as SXComponents

export const styled: CreateStyled = Object.assign(baseStyled, styledTags)
