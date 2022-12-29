import type { ColorToken, DefaultProps, SizeValue } from '@robin-ui/types'
import { forwardRef } from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from '@robin-ui/icons'
import { clampNumber, range } from '@robin-ui/utils'
import { useUncontrolled } from '@robin-ui/hooks'

import { PageButton, PaginationContainer } from './Pagination.style'

export interface Props extends DefaultProps<HTMLDivElement, 'size' | 'children' | 'onChange'> {
  count: number
  page?: number
  defaultPage?: number
  siblings?: number
  align?: 'left' | 'right' | 'center'
  variant?: 'filled' | 'faded' | 'outlined' | 'text'
  color?: ColorToken
  size?: SizeValue
  radius?: SizeValue
  onChange?: (page: number) => void
}

export const Pagination = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    count,
    page,
    defaultPage = 1,
    siblings = 1,
    align = 'center',
    variant = 'filled',
    color = 'primary',
    size = 'md',
    radius = 'sm',
    onChange,
    ...otherProps
  } = props
  const [currentPage, setUncontrolled] = useUncontrolled(defaultPage, page)

  let minPage = currentPage - siblings - 1
  let maxPage = currentPage + siblings + 1
  if (minPage < 1) {
    maxPage = maxPage + (1 - minPage)
    minPage = 1
  }
  if (maxPage > count) {
    minPage = minPage - (maxPage - count)
    maxPage = count
  }
  minPage = Math.max(minPage, 2)
  maxPage = Math.min(maxPage, count - 1)
  const visiblePages = [1, ...range(minPage, maxPage), count]

  const navigate = (nextPage: number) => {
    nextPage = clampNumber(nextPage, 1, count)
    setUncontrolled(nextPage)
    onChange?.(nextPage)
  }

  return (
    <PaginationContainer ref={ref} $align={align} {...otherProps}>
      <PageButton
        variant="text"
        size={size}
        radius={radius}
        color="surface.onBase"
        disabled={currentPage === 1}
        onClick={() => navigate(currentPage - 1)}
        aria-label="Go to previous page">
        <ChevronLeft size={size} strokeWidth={1} />
      </PageButton>
      {visiblePages.map((p, i) => {
        if ((i === 1 && p > 2) || (i === visiblePages.length - 2 && p < count - 1)) {
          return (
            <PageButton key={`elipsis-${i}`} size={size} variant="text" disabled aria-hidden>
              <MoreHorizontal size={size} strokeWidth={1} />
            </PageButton>
          )
        }
        return (
          <PageButton
            key={p}
            variant={p === currentPage ? variant : 'text'}
            size={size}
            radius={radius}
            color={p === currentPage ? color : 'surface.onBase'}
            onClick={() => navigate(p)}
            aria-label={`Go to page ${p}`}>
            {p}
          </PageButton>
        )
      })}
      <PageButton
        variant="text"
        size={size}
        radius={radius}
        color="surface.onBase"
        disabled={currentPage === count}
        onClick={() => navigate(currentPage + 1)}
        aria-label="Go to next page">
        <ChevronRight size={size} strokeWidth={1} />
      </PageButton>
    </PaginationContainer>
  )
})

Pagination.displayName = 'Pagination'
