import { cloneElement, forwardRef, useRef, useState } from 'react'

import { useId, useKeyDown, useTheme } from '@robin-ui/hooks'
import { ThemeProvider } from '@robin-ui/theme'

import type { Floating } from '../Floating'

import { TooltipContainer } from './Tooltip.style'

export interface Props extends Omit<React.ComponentProps<typeof Floating>, 'label'> {
  label?: React.ReactNode
  children?: React.ReactElement
}

export const Tooltip = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    open: openOverride,
    withArrow = true,
    label,
    placement = 'bottom',
    id,
    children,
    ...otherProps
  } = props
  const [open, setOpen] = useState(false)
  const targetRef = useRef<HTMLElement>(null)
  const { colorMode } = useTheme()
  const _id = useId(id)

  useKeyDown('Escape', () => setOpen(false))

  return (
    <>
      <ThemeProvider colorMode={colorMode === 'light' ? 'dark' : 'light'}>
        <TooltipContainer
          ref={ref}
          id={_id}
          role="tooltip"
          trigger={targetRef.current}
          open={openOverride !== undefined ? openOverride : open}
          withArrow={withArrow}
          padding={['xs', 'sm']}
          radius="sm"
          placement={placement}
          {...otherProps}>
          {label}
        </TooltipContainer>
      </ThemeProvider>
      {children &&
        cloneElement(children, {
          ref: targetRef,
          'aria-describedby': open ? _id : undefined,
          onKeyDown: (event: React.KeyboardEvent) => {
            if (event.key === 'Escape') {
              setOpen(false)
            }
          },
          onPointerEnter: () => setOpen(true),
          onPointerLeave: () => setOpen(false),
          onFocus: () => setOpen(true),
          onBlur: () => setOpen(false)
        })}
    </>
  )
})

Tooltip.displayName = 'Tooltip'
