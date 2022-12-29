import { forwardRef, useContext } from 'react'

import { X } from '@robin-ui/icons'
import type { DefaultProps } from '@robin-ui/types'

import { Button } from '../Button'
import { FlexBox } from '../FlexBox'
import { ModalContext } from '../Modal'
import { Text } from '../Typography'

export interface Props extends DefaultProps<HTMLDivElement, 'wrap'> {}

export const ModalHeader = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, ...otherProps } = props
  const { id, onClose } = useContext(ModalContext)

  return (
    <FlexBox ref={ref} justifyContent="space-between" {...otherProps}>
      <Text id={id} as="div" size="xl">
        {children}
      </Text>
      {onClose && (
        <Button
          onClick={onClose}
          variant="text"
          color="surface.onBase"
          size="sm"
          aria-label="Close">
          <X />
        </Button>
      )}
    </FlexBox>
  )
})

ModalHeader.displayName = 'ModalHeader'
