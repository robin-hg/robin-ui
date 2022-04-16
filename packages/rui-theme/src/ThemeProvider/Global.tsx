import { Global as EmotionGlobal } from '@emotion/react'

export const Global = () => (
	<EmotionGlobal
		styles={[
			theme => ({
				html: {
					padding: 0,
					margin: 0,
					fontSize: '62.5%',
					scrollBehavior: 'smooth'
				},
				body: {
					padding: 0,
					margin: 0,
					lineHeight: 1.5,
					minHeight: '100vh',
					background: theme.palette.background.base,
					color: theme.palette.background.onBase,
					textRendering: 'optimizeLegibility',
					WebkitFontSmoothing: 'antialiased'
				},
				'*': {
					margin: 0,
					boxSizing: 'border-box'
				},
				'img, picture, video, canvas, svg': {
					display: 'block',
					maxWidth: '100%'
				},
				'@media (prefers-reduced-motion)': {
					html: {
						scrollBehavior: 'auto'
					},
					'*, *::before, *::after': {
						transitionDuration: '0ms !important'
					}
				}
			}),
			theme => theme.global
		]}
	/>
)
