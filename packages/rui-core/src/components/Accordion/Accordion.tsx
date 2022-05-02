import type { DefaultProps } from '@rui/types'
import React, { useContext, useEffect, useState } from 'react'
import { useId } from '@rui/hooks'
import { PaperContext } from '../Paper'

import { Text } from '../Typography'

import { AccordionContainer, AccordionSummary, AccordionContent } from './Accordion.style'
import { ChevronDown } from '@rui/icons'

export interface Props extends DefaultProps<HTMLDivElement, 'summary' | 'title'> {
	open?: boolean
	disabled?: boolean
	title?: React.ReactNode
}

export const Accordion = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { open: openOverride, disabled, title, children, ...otherProps } = props
	const { paperColor = 'surface' } = useContext(PaperContext)
	const [open, setOpen] = useState(!!openOverride)
	const id = useId()

	const overrideMode = openOverride !== undefined
	const expandable = !!children && !disabled

	useEffect(() => {
		if (overrideMode && expandable) {
			setOpen(openOverride)
		}
	}, [openOverride])

	const toggleOpen = () => {
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
				id={`${id}-summary`}
				aria-controls={`${id}-body`}
				aria-expanded={!!open}
				aria-disabled={disabled}>
				<Text as="div" bold color="inherit">
					{title}
				</Text>
				{!!children && <ChevronDown size={20} />}
			</AccordionSummary>
			<AccordionContent in={!disabled && open} role="region" id={`${id}-body`} aria-labelledby={`${id}-summary`}>
				{children}
			</AccordionContent>
		</AccordionContainer>
	)
})

Accordion.displayName = 'Accordion'
