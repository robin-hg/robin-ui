import { Global as EmotionGlobal, useTheme, type CSSObject } from '@emotion/react'
import { css } from './index'

const defaultStyle = (theme: RobinUI.ThemeWithUtils) => css`
	& html {
		padding: 0;
		margin: 0;
		font-size: 62.5%;
	}

	& body {
		padding: 0;
		margin: 0;
		text-rendering: optimizeLegibility;
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background: ${theme.background};
	}
`

interface GlobalProps {
	styles?: (theme: RobinUI.ThemeWithUtils) => CSSObject
}

const Global = (props: GlobalProps) => {
	const { styles } = props
	const theme = useTheme()
	return <EmotionGlobal styles={css([defaultStyle(theme), styles?.(theme)])} />
}

export default Global
