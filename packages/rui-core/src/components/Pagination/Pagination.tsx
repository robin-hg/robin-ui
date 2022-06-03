import type { DefaultProps, SizeValue, ColorToken } from '@rui/types'
import React from 'react'

import { PaginationContainer, PageButton } from './Pagination.style'
import { ChevronLeft, ChevronRight, MoreHorizontal } from '@rui/icons'

export interface Props extends DefaultProps<HTMLDivElement, 'size' | 'children' | 'onChange'> {
	totalItems: number
	itemsPerPage: number
	currentPage: number
	/**
	 * Max number of page buttons. Min 5.
	 * @default 7
	 */
	maxButtons?: number
	/**
	 * Alignment.
	 * @default right
	 */
	align?: 'left' | 'right' | 'center'
	/**
	 * Button color.
	 * @default primary
	 */
	color?: ColorToken
	size?: SizeValue
	onChange?: (page: number) => void
}

export const Pagination = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		totalItems,
		itemsPerPage,
		currentPage,
		maxButtons = 7,
		align = 'center',
		color = 'primary',
		size = 'md',
		onChange,
		...otherProps
	} = props

	const numberOfPages = Math.ceil(totalItems / itemsPerPage)
	const numSiblings = Math.max(5, maxButtons) / 2
	const currentIndex = currentPage - 1
	const minIndex = currentIndex - Math.floor(numSiblings)
	const maxIndex = currentIndex + Math.ceil(numSiblings)

	const visiblePages = Array.from({ length: numberOfPages }, (_, i) => i + 1).slice(
		Math.max(0, minIndex + Math.min(0, numberOfPages - maxIndex)),
		Math.min(numberOfPages, maxIndex - Math.min(0, minIndex))
	)

	const navigate = (page: number) => {
		if (page < 1 || page > numberOfPages) {
			return
		}
		onChange?.(page)
	}

	return (
		<PaginationContainer ref={ref} $align={align} {...otherProps}>
			<PageButton
				variant="text"
				size={size}
				color="surface.onBase"
				disabled={currentPage === 1}
				onClick={() => navigate(currentPage - 1)}
				aria-label="Go to previous page">
				<ChevronLeft size={size} strokeWidth={1} />
			</PageButton>
			{visiblePages.map((page, i) => {
				switch (i) {
					case 0:
						page = 1
						break
					case 1:
						if (page > 2) {
							return (
								<PageButton key="elipsis-left" size={size} variant="text" disabled aria-hidden>
									<MoreHorizontal size={size} strokeWidth={1} />
								</PageButton>
							)
						}
						break
					case visiblePages.length - 1:
						page = numberOfPages
						break
					case visiblePages.length - 2:
						if (page < numberOfPages - 1) {
							return (
								<PageButton key="elipsis-right" size={size} variant="text" disabled aria-hidden>
									<MoreHorizontal size={size} strokeWidth={1} />
								</PageButton>
							)
						}
						break
				}
				return (
					<PageButton
						key={page}
						variant={page === currentPage ? 'filled' : 'text'}
						size={size}
						color={page === currentPage ? color : 'surface.onBase'}
						onClick={() => navigate(page)}
						aria-label={`Go to page ${page}`}>
						{page}
					</PageButton>
				)
			})}
			<PageButton
				variant="text"
				size={size}
				color="surface.onBase"
				disabled={currentPage === numberOfPages}
				onClick={() => navigate(currentPage + 1)}
				aria-label="Go to next page">
				<ChevronRight size={size} strokeWidth={1} />
			</PageButton>
		</PaginationContainer>
	)
})

Pagination.displayName = 'Pagination'
