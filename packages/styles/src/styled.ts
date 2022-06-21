import _styled, { type Interpolation } from '@emotion/styled'
import type {
  StyledOptions,
  StyleProps,
  BaseCreateStyled,
  StyledTags,
  CreateStyled,
  SXComponents
} from './types'
import { transformSx } from './transformSx'

const excludedProps = new Set(['sx', 'css', 'as'])

const shouldForwardProp = (prop: string) => !excludedProps.has(prop) && !prop.startsWith('$')

const augumentStyle = <P extends StyleProps>(props: P, label = '') => {
  const { sx, theme } = props
  const themeSx = theme.componentStyles[label]
  return [transformSx(themeSx), transformSx(sx)]
}

const styled: BaseCreateStyled =
  (component: React.ComponentType, options?: StyledOptions) =>
  <P extends StyleProps>(...styles: Interpolation<P>[]) => {
    if (options?.shouldForwardProp) {
      options.shouldForwardProp = shouldForwardProp
    }

    return _styled(component, options)(...styles, augumentStyle)
  }

const tags = Object.keys(_styled) as (keyof JSX.IntrinsicElements)[]
const styledTags = tags.reduce((acc, tag) => ({ ...acc, [tag]: styled(tag) }), {}) as StyledTags
export const sxc = tags.reduce((acc, tag) => ({ ...acc, [tag]: styled(tag)() }), {}) as SXComponents

const newStyled: CreateStyled = Object.assign(styled, styledTags)
export default newStyled
