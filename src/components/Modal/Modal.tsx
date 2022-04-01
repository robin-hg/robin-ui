import React, { useContext, useEffect, useRef, useState } from 'react'
import { useCombinedRef, useId, useOnKeyPress, useMutableCallback } from '@rui/hooks'

import Fade from '@rui/components/Fade'
import FocusTrap from '@rui/components/FocusTrap'
import Portal from '@rui/components/Portal'
import { ModalManagerContext } from '@rui/components/ModalManager'

import { Backdrop, ModalContainer, ModalPaper } from './Modal.style'

export const ModalContext = React.createContext<{
	id?: string
	contentId?: string
	modalRef?: React.RefObject<HTMLDivElement>
	onClose?: () => void
	setPreventClose?: (state: boolean) => void
}>({})

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {
	open?: boolean
	onClose?: () => void
}

const Modal = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { open, onClose, children, ...otherProps } = props
	const [preventClose, setPreventClose] = useState(false)
	const modalRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(ref, modalRef)
	const { topModal, addModal, removeModal } = useContext(ModalManagerContext)
	const id = useId()
	const contentId = useId()

	const close = () => {
		if (!preventClose) {
			onClose?.()
		}
	}

	const handleEsc = useMutableCallback(() => {
		if (!topModal || topModal === id) {
			close()
		}
	})

	useOnKeyPress('Escape', handleEsc)

	useEffect(() => {
		if (open) {
			addModal?.(id)
		} else {
			removeModal?.(id)
		}
		return () => {
			removeModal?.(id)
		}
	}, [open])

	return (
		<Portal>
			<ModalContext.Provider
				value={{
					id,
					contentId,
					modalRef,
					setPreventClose,
					onClose: onClose && !preventClose ? close : undefined
				}}>
				<Fade in={open}>
					<ModalContainer>
						<div>
							<FocusTrap>
								<ModalPaper
									ref={combinedRef}
									role="dialog"
									aria-modal="true"
									aria-labelledby={id}
									aria-describedby={contentId}
									{...otherProps}>
									{children}
								</ModalPaper>
							</FocusTrap>
							<Backdrop onClick={close} />
						</div>
					</ModalContainer>
				</Fade>
			</ModalContext.Provider>
		</Portal>
	)
})

Modal.displayName = 'Modal'
export default Modal
