import type { DefaultProps, Size } from '@robin-ui/types'
import { createContext, forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import { useCombinedRef, useId, useLockWindowScroll } from '@robin-ui/hooks'

import { Fade } from '../Transition'
import { FocusTrap } from '../FocusTrap'
import { Portal } from '../Portal'

import { Backdrop, ModalContainer, ModalPaper } from './Modal.style'

export const ModalContext = createContext<{
  id?: string
  contentId?: string
  modalEl?: HTMLDivElement | null
  onClose?: () => void
  setPreventClose?: (state: boolean) => void
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'size'> {
  size?: Size | 'full'
  open?: boolean
  onClose?: () => void
}

export const Modal = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { size = 'md', open, onClose, onClick, children, ...otherProps } = props
  const [preventClose, setPreventClose] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const combinedRef = useCombinedRef(ref, modalRef)
  const id = useId()
  useLockWindowScroll(!!open)

  useEffect(() => {
    if (open) {
      modalRef.current?.focus()
    }
  }, [open])

  const close = !preventClose ? onClose : undefined

  const ctxValue = useMemo(
    () => ({
      id,
      contentId: `${id}-content`,
      modalEl: modalRef.current,
      setPreventClose,
      onClose: close
    }),
    [id, modalRef, preventClose, onClose]
  )

  return (
    <Portal>
      <Fade in={open} unmountOnExit>
        <Backdrop />
        <ModalContainer
          tabIndex={-1}
          onClick={close}
          onKeyDown={event => {
            if (event.key === 'Escape') {
              event.stopPropagation()
              close?.()
            }
          }}>
          <FocusTrap restoreFocus>
            <ModalPaper
              ref={combinedRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={id}
              aria-describedby={`${id}-content`}
              $size={size}
              onClick={event => {
                event.stopPropagation()
                onClick?.(event)
              }}
              tabIndex={-1}
              {...otherProps}>
              <ModalContext.Provider value={ctxValue}>{children}</ModalContext.Provider>
            </ModalPaper>
          </FocusTrap>
        </ModalContainer>
      </Fade>
    </Portal>
  )
})

Modal.displayName = 'Modal'
