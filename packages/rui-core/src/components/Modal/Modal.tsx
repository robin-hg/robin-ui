import type { DefaultProps } from '@rui/types'
import React, { useRef, useState } from 'react'
import { useCombinedRef, useId } from '@rui/hooks'

import { Fade } from '../Transition'
import { FocusTrap } from '../FocusTrap'
import { Portal } from '../Portal'

import { Backdrop, ModalContainer, ModalPaper } from './Modal.style'

export const ModalContext = React.createContext<{
	id?: string
	contentId?: string
	modalEl?: HTMLDivElement | null
	onClose?: () => void
	setPreventClose?: (state: boolean) => void
}>({})

export interface Props extends DefaultProps<HTMLDivElement> {
	open?: boolean
	onClose?: () => void
}

export const Modal = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { open, onClose, children, ...otherProps } = props
	const [preventClose, setPreventClose] = useState(false)
	const modalRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(ref, modalRef)
	const id = useId()
	const contentId = useId()

	const close = () => {
		if (!preventClose) {
			onClose?.()
		}
	}

	return (
		<Portal>
			<ModalContext.Provider
				value={{
					id,
					contentId,
					modalEl: modalRef.current,
					setPreventClose,
					onClose: onClose && !preventClose ? close : undefined
				}}>
				<Fade in={open} unmountOnExit>
					<ModalContainer>
						<FocusTrap autofocus restoreFocus>
							<ModalPaper
								ref={combinedRef}
								role="dialog"
								aria-modal="true"
								aria-labelledby={id}
								aria-describedby={contentId}
								onKeyDown={event => {
									if (event.key === 'Escape') {
										event.stopPropagation()
										close()
									}
								}}
								{...otherProps}>
								{children}
							</ModalPaper>
						</FocusTrap>
						<Backdrop tabIndex={-1} onClick={close} />
					</ModalContainer>
				</Fade>
			</ModalContext.Provider>
		</Portal>
	)
})

Modal.displayName = 'Modal'
