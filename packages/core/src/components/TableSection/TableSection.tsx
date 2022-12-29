import { forwardRef } from 'react'

import type { DefaultProps } from '@robin-ui/types'

import { StyledTableSection } from './TableSection.style'

export interface Props extends DefaultProps<HTMLTableSectionElement> {}

const TableSectionFactory = (variant: 'thead' | 'tbody' | 'tfoot') => {
  const TableSection = forwardRef<HTMLTableSectionElement, Props>((props, ref) => {
    const { children, ...otherProps } = props

    return (
      <StyledTableSection ref={ref} as={variant} $variant={variant} {...otherProps}>
        {children}
      </StyledTableSection>
    )
  })

  TableSection.displayName = 'TableSection'

  return TableSection
}

export const Thead = TableSectionFactory('thead')
export const Tbody = TableSectionFactory('tbody')
export const Tfoot = TableSectionFactory('tfoot')
