import styled from 'style'

import { Paper } from 'index'

export const ModalContainer = styled.div`
	position: fixed;
	inset: 0;
	z-index: 1000;

	& > div {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
`

export const ModalPaper = styled(Paper)`
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	max-width: 60rem;
	min-height: 35rem;
	max-height: calc(100% - 5rem);
`

export const Backdrop = styled.div`
	position: fixed;
	z-index: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
`
