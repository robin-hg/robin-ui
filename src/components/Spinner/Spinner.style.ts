import styled, { keyframes, css } from 'style'
import { getColor } from 'utils/color'

const circleRotate = keyframes`
	100%{
		 transform: rotate(360deg);
	}
`

const circleDash = keyframes`
	0%{
		stroke-dasharray: 1,200;
		stroke-dashoffset: 0;
	}
	50%{
		stroke-dasharray: 90,200;
		stroke-dashoffset: -35;
	}
	100%{
		stroke-dasharray: 90,200;
		stroke-dashoffset: -124;
	}
`

const spin = keyframes`
	100% {
		transform:rotate(360deg);
	}
`

type State = 'loading' | 'complete' | 'error'

interface SpinnerContainer {
	size: string
	color: string
	spin: boolean
}

export const SpinnerContainer = styled.div<SpinnerContainer>`
	display: block;
	width: ${props => props.size};
	height: ${props => props.size};
	color: ${props => getColor(props.theme, props.color)};

	${props =>
		props.spin &&
		css`
			animation: ${spin} 1s linear infinite;
		`}

	& > svg {
		width: 100% !important;
		height: 100% !important;
	}
`

interface SVGProps {
	state: State
}

export const AnimatedCircle = styled.circle<SVGProps>`
	opacity: ${props => (!props.state || props.state === 'loading' ? 1 : 0)};
	stroke: currentColor;
	stroke-dasharray: 1, 200;
	stroke-dashoffset: 0;
	transition: opacity 200ms ease-out;
	transform-origin: 5rem 5rem;
	animation: ${circleRotate} 1.8s linear infinite, ${circleDash} 1.9s ease-in-out infinite;
`

export const AnimatedComplete = styled.polyline<SVGProps>`
	stroke: currentColor;
	stroke-dashoffset: 0;
	transition: opacity 200ms ease-out 200ms, stroke-dasharray 500ms cubic-bezier(0.23, 1, 0.32, 1) 300ms;

	${props =>
		props.state === 'complete'
			? css`
					opacity: 1;
					stroke-dasharray: 45, 45;
			  `
			: css`
					opacity: 0;
					stroke-dasharray: 0, 45;
			  `}
`

export const AnimatedXRight = styled.path<SVGProps>`
	stroke: currentColor;
	stroke-dashoffset: 0;
	transition: opacity 200ms ease-out 400ms, stroke-dasharray 500ms cubic-bezier(0.23, 1, 0.32, 1) 500ms;

	${props =>
		props.state === 'error'
			? css`
					opacity: 1;
					stroke-dasharray: 45, 45;
			  `
			: css`
					opacity: 0;
					stroke-dasharray: 0, 45;
			  `}
`

export const AnimatedXLeft = styled.path<SVGProps>`
	stroke: currentColor;
	stroke-dashoffset: 0;
	transition: opacity 200ms ease-out 200ms, stroke-dasharray 500ms cubic-bezier(0.23, 1, 0.32, 1) 300ms;

	${props =>
		props.state === 'error'
			? css`
					opacity: 1;
					stroke-dasharray: 45, 45;
			  `
			: css`
					opacity: 0;
					stroke-dasharray: 0, 45;
			  `}
`
