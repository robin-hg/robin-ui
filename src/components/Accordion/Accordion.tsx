import { ChevronDown } from '@rui/icons'
import React, { useEffect, useState } from 'react'
import { handleEnter } from '@rui/utils'
import { AccordionContainer, AccordionContent, AccordionSummary } from './Accordion.style'

import Typography from '@rui/components/Typography'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'summary'> {
	open?: boolean
	disabled?: boolean
	summary?: React.ReactNode
	onClick?: () => void
}

const Accordion = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
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
		<AccordionContainer ref={ref} $disabled={!!disabled} {...otherProps} elevation={0}>
			<AccordionSummary
				role="button"
				$open={open}
				$expandable={expandable}
				$disabled={!!disabled}
				onClick={toggleOpen}
				onKeyDown={handleEnter(toggleOpen)}
				tabIndex={expandable ? 0 : -1}>
				<Typography component="div" bold color="inherit">
					{summary}
				</Typography>
				{!!children && <ChevronDown size={20} />}
			</AccordionSummary>
			{children && <AccordionContent open={!disabled && open}>{children}</AccordionContent>}
		</AccordionContainer>
	)
})

Accordion.displayName = 'Accordion'
export default Accordion
