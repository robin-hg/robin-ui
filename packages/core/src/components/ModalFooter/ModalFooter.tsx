import type { DefaultProps } from '@robin-ui/types'
import { forwardRef, useContext } from 'react'

import { ModalContext } from '../Modal'
import { FlexBox } from '../FlexBox'
import { Button } from '../Button'

export interface Props extends DefaultProps<HTMLDivElement, 'wrap'> {
  closeButton?: React.ReactNode
}

export const ModalFooter = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { closeButton = 'Close', children, ...otherProps } = props
  const { onClose } = useContext(ModalContext)

  return (
    <FlexBox ref={ref} justifyContent="flex-end" {...otherProps}>
      {closeButton && onClose && (
        <Button onClick={onClose} variant="text" color="surface.onBase">
          {closeButton}
        </Button>
      )}
      {children}
    </FlexBox>
  )
})

ModalFooter.displayName = 'ModalFooter'
