import { forwardRef, useContext } from 'react'

import type { DefaultProps, SizeValue } from '@robin-ui/types'

import { TableContext } from '../Table/Table'

import { StyledTableCaption } from './TableCaption.style'

export interface Props extends DefaultProps<HTMLTableCaptionElement> {
  align?: 'left' | 'center' | 'right'
  padding?: SizeValue | SizeValue[]
  captionSide?: 'top' | 'bottom'
}

export const TableCaption = forwardRef<HTMLTableCaptionElement, Props>((props, ref) => {
  const { align, padding, captionSide = 'bottom', children, ...otherProps } = props
  const { cellPadding: tablePadding } = useContext(TableContext)

  return (
    <StyledTableCaption
      ref={ref}
      $align={align}
      $padding={padding ?? tablePadding}
      $captionSide={captionSide}
      {...otherProps}>
      {children}
    </StyledTableCaption>
  )
})

TableCaption.displayName = 'TableCaption'
