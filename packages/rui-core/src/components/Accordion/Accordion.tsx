import type { DefaultProps } from '@rui/types'
import { ChevronDown } from '@rui/icons'
import React, { useEffect, useState } from 'react'
import { handleKeyPress } from '@rui/utils'
import { AccordionContent, AccordionSummary } from './Accordion.style'

import { Text } from '../Typography'
import { BaseContainer } from '../BaseContainer'

export interface Props extends DefaultProps<HTMLDivElement, 'summary'> {
	open?: boolean
	disabled?: boolean
	summary?: React.ReactNode
	onClick?: () => void
}

export const Accordion = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { open: openOverride, disabled, summary, children, onClick, ...otherProps } = props
	const [open, setOpen] = useState(!!openOverride)

	const overrideMode = openOverride !== undefined
	const expandable = !!children && !disabled

	useEffect(() => {
		if (overrideMode && expandable) {
			setOpen(openOverride)
		}
	}, [open])

	const toggleOpen = () => {
		onClick?.()
		if (!overrideMode && expandable) {
			setOpen(!open)
		}
	}

	return (
		<BaseContainer ref={ref} {...otherProps}>
			<AccordionSummary
				role="button"
				$open={open}
				$expandable={expandable}
				$disabled={!!disabled}
				onClick={toggleOpen}
				onKeyDown={handleKeyPress('Enter', toggleOpen)}
				tabIndex={expandable ? 0 : -1}
				aria-disabled={disabled}>
				<Text as="div" bold color="inherit">
					{summary}
				</Text>
				{!!children && <ChevronDown size={20} />}
			</AccordionSummary>
			{children && <AccordionContent open={!disabled && open}>{children}</AccordionContent>}
		</BaseContainer>
	)
})

Accordion.displayName = 'Accordion'
