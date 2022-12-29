import { forwardRef, useContext } from 'react'

import type { DefaultProps } from '@robin-ui/types'

import { ModalContext } from '../Modal'

import { ModalContentContainer } from './ModalContent.style'

export interface Props extends DefaultProps<HTMLDivElement> {}

export const ModalContent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, ...otherProps } = props
  const { contentId } = useContext(ModalContext)

  return (
    <ModalContentContainer ref={ref} id={contentId} {...otherProps}>
      {children}
    </ModalContentContainer>
  )
})

ModalContent.displayName = 'ModalContent'
