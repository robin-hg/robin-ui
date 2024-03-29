import { forwardRef, useState } from 'react'

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

  /** Hide border */
  borderless?: boolean
}

export const Accordion = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    open: openOverride,
    disabled,
    title,
    chevronPosition = 'left',
    borderless,
    children,
    ...otherProps
  } = props
  const [open, setOpen] = useState(false)
  const id = useId()

  const expandable = !!children && !disabled
  const overrideMode = openOverride !== undefined && expandable
  const isOpen = overrideMode ? openOverride : open

  return (
    <AccordionContainer ref={ref} $borderless={!!borderless} {...otherProps}>
      <AccordionSummary
        role="button"
        $open={isOpen}
        $expandable={expandable}
        $spaceBetween={chevronPosition === 'right'}
        disabled={!!disabled}
        onClick={() => {
          if (!overrideMode) {
            setOpen(!open)
          }
        }}
        tabIndex={expandable ? 0 : -1}
        id={`${id}-summary`}
        aria-controls={`${id}-body`}
        aria-expanded={!!isOpen}
        aria-disabled={disabled}>
        {!!children && chevronPosition === 'left' && <ChevronDown size={20} />}
        <Text as="div" bold color="inherit">
          {title}
        </Text>
        {!!children && chevronPosition === 'right' && <ChevronDown size={20} />}
      </AccordionSummary>
      <Collapse in={isOpen} unmountOnExit>
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
