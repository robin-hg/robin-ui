import type { DefaultProps, SizeValue } from '@robin-ui/types'
import React, { useMemo } from 'react'

import { StyledList } from './List.style'

export const ListContext = React.createContext<{
  marker?: React.ReactElement
}>({})

export interface Props extends DefaultProps<HTMLUListElement> {
  variant?: 'unordered' | 'ordered'
  styleType?: React.CSSProperties['listStyleType']
  marker?: React.ReactElement
  spacing?: SizeValue
  children?: React.ReactElement | React.ReactElement[]
}

export const List = React.forwardRef<HTMLUListElement, Props>((props, ref) => {
  const {
    variant = 'unordered',
    styleType,
    marker,
    spacing = 'xs',
    children,
    ...otherProps
  } = props

  const ctxValue = useMemo(() => ({ marker }), [marker])

  return (
    <StyledList
      ref={ref}
      as={variant === 'ordered' && marker !== undefined ? 'ol' : 'ul'}
      $variant={variant}
      $spacing={spacing}
      $styleType={marker !== undefined ? 'none' : styleType}
      {...otherProps}>
      <ListContext.Provider value={ctxValue}>{children}</ListContext.Provider>
    </StyledList>
  )
})

List.displayName = 'List'
