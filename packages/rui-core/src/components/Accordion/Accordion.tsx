import type { DefaultProps } from '@rui/types'
import React, { useContext, useEffect, useState } from 'react'
import { useId } from '@rui/hooks'
import { PaperContext } from '../Paper'

import { Text } from '../Typography'

import { AccordionContainer, AccordionSummary, AccordionContent } from './Accordion.style'
import { ChevronDown } from '@rui/icons'

export interface Props extends DefaultProps<HTMLDivElement, 'summary'> {
	open?: boolean
	disabled?: boolean
	summary?: React.ReactNode
	onToggle?: () => void
}

export const Accordion = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { open: openOverride, disabled, summary, children, onToggle, ...otherProps } = props
	const { paperColor = 'surface' } = useContext(PaperContext)
	const [open, setOpen] = useState(!!openOverride)
	const summaryId = useId()
	const bodyId = useId()

	const overrideMode = openOverride !== undefined
	const expandable = !!children && !disabled

	useEffect(() => {
		if (overrideMode && expandable) {
			setOpen(openOverride)
		}
	}, [open])

	const toggleOpen = () => {
		onToggle?.()
		if (!overrideMode && expandable) {
			setOpen(!open)
		}
	}

	return (
		<AccordionContainer ref={ref} {...otherProps}>
			<AccordionSummary
				role="button"
				$open={open}
				$expandable={expandable}
				$paperColor={paperColor}
				disabled={!!disabled}
				onClick={toggleOpen}
				tabIndex={expandable ? 0 : -1}
				id={summaryId}
				aria-controls={bodyId}
				aria-expanded={!!open}
				aria-disabled={disabled}>
				<Text as="div" bold color="inherit">
					{summary}
				</Text>
				{!!children && <ChevronDown size={20} />}
			</AccordionSummary>
			<AccordionContent in={!disabled && open} role="region" id={bodyId} aria-labelledby={summaryId}>
				{children}
			</AccordionContent>
		</AccordionContainer>
	)
})

Accordion.displayName = 'Accordion'
