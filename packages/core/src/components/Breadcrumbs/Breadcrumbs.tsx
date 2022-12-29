import type { DefaultProps, SizeValue } from '@robin-ui/types'
import { Fragment, forwardRef } from 'react'

import { BreadcrumbsContainer } from './Breadcrumbs.style'

export interface Props extends DefaultProps<HTMLDivElement> {
  separator?: React.ReactNode
  spacing?: SizeValue
}

export const Breadcrumbs = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { separator = '/', spacing = 'md', children, ...otherProps } = props

  const list = Array.isArray(children) ? children : [children]

  return (
    <BreadcrumbsContainer ref={ref} $spacing={spacing} {...otherProps}>
      {list.map((item, i) => (
        <Fragment key={i}>
          {item}
          {i !== list.length - 1 && <span>{separator}</span>}
        </Fragment>
      ))}
    </BreadcrumbsContainer>
  )
})

Breadcrumbs.displayName = 'Breadcrumbs'
