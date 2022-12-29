import { createContext, forwardRef, useMemo } from 'react'

import type { DefaultProps, SizeValue } from '@robin-ui/types'

import { StyledList } from './List.style'

export const ListContext = createContext<{
  marker?: React.ReactElement
}>({})

export interface Props extends DefaultProps<HTMLUListElement> {
  variant?: 'unordered' | 'ordered'
  styleType?: React.CSSProperties['listStyleType']
  marker?: React.ReactElement
  spacing?: SizeValue
  children?: React.ReactElement | React.ReactElement[]
}

export const List = forwardRef<HTMLUListElement, Props>((props, ref) => {
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
      as={variant === 'ordered' ? 'ol' : 'ul'}
      $spacing={spacing}
      $styleType={marker !== undefined ? 'none' : styleType}
      {...otherProps}>
      <ListContext.Provider value={ctxValue}>{children}</ListContext.Provider>
    </StyledList>
  )
})

List.displayName = 'List'
