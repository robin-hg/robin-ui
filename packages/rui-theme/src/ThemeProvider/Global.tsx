import { Global as EmotionGlobal, type CSSObject } from '@emotion/react'
import type { RUITheme } from '../types'

const defaultStyle = (theme: RUITheme): CSSObject => ({
	['& html']: {
		padding: 0,
		margin: 0,
		fontSize: '62.5%'
	},
	['& body']: {
		padding: 0,
		margin: 0,
		background: theme.palette.background.base,
		color: theme.palette.background.onBase,
		textRendering: 'optimizeLegibility'
	}
})

export const Global = () => <EmotionGlobal styles={defaultStyle} />
