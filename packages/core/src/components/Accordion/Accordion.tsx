import { forwardRef, useEffect, useState } from 'react'

import { useId } from '@robin-ui/hooks'
import { ChevronDown } from '@robin-ui/icons'
import type { DefaultProps } from '@robin-ui/types'

import { Collapse } from '../Transition'
import { Text } from '../Typography'

import { AccordionContainer, AccordionContent, AccordionSummary } from './Accordion.style'

export interface Props extends DefaultProps<HTMLDivElement, 'summary' | 'title'> {
  /** Controlled open state */
  open?: boolean

  /** Disables open/close */
  disabled?: boolean

  /** Accordion button text */
  title?: React.ReactNode

  /** Chevron position */
  chevronPosition?: 'left' | 'right'
}

export const Accordion = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    open: openOverride,
    disabled,
    title,
    chevronPosition = 'left',
    children,
    ...otherProps
  } = props
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
        $spaceBetween={chevronPosition === 'right'}
        disabled={!!disabled}
        onClick={toggleOpen}
        tabIndex={expandable ? 0 : -1}
        id={`${id}-summary`}
        aria-controls={`${id}-body`}
        aria-expanded={!!open}
        aria-disabled={disabled}>
        {!!children && chevronPosition === 'left' && <ChevronDown size={20} />}
        <Text as="div" bold color="inherit">
          {title}
        </Text>
        {!!children && chevronPosition === 'right' && <ChevronDown size={20} />}
      </AccordionSummary>
      <Collapse in={open} unmountOnExit>
        <AccordionContent
          role="region"
          id={`${id}-body`}
          aria-labelledby={`${id}-summary`}
          paddin="md"
          radius="xs"
          disabled={!!disabled}>
          {children}
        </AccordionContent>
      </Collapse>
    </AccordionContainer>
  )
})

Accordion.displayName = 'Accordion'
