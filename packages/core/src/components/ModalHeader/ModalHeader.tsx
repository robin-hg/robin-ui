import { forwardRef, useContext } from 'react'

import { X } from '@robin-ui/icons'
import type { DefaultProps } from '@robin-ui/types'

import { FlexBox } from '../FlexBox'
import { IconButton } from '../IconButton'
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
        <IconButton onClick={onClose} variant="text" color="surface.onBase" aria-label="Close">
          <X />
        </IconButton>
      )}
    </FlexBox>
  )
})

ModalHeader.displayName = 'ModalHeader'
