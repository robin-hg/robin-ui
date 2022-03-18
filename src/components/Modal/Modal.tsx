import React, { useRef, useState } from 'react'
import { useCombinedRef } from 'hooks'

import { Fade, FocusTrap, Portal } from 'index'

import { Backdrop, ModalContainer, ModalPaper } from './Modal.style'

export const ModalContext = React.createContext<{
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

	const close = () => {
		if (!preventClose) {
			onClose?.()
		}
	}

	// const handleEsc = useMutableCallback(() => {
	// 	if (!topModal || topModal === id) {
	// 		close()
	// 	}
	// })

	return (
		<Portal>
			<ModalContext.Provider
				value={{
					modalRef,
					setPreventClose,
					onClose: onClose && !preventClose ? close : undefined
				}}>
				<Fade in={open}>
					<ModalContainer>
						<div>
							<FocusTrap>
								<ModalPaper ref={combinedRef} {...otherProps}>
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
