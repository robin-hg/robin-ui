import type { DeepPartial } from '@robin-ui/types'
import type { BaseTheme, ColorMode, DerrivedColorMode } from '@robin-ui/theme'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '@robin-ui/theme'
import { useColorMode, useReducedMotion } from '@robin-ui/hooks'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Global } from './Global'

export interface Props {
	colorMode?: DerrivedColorMode
	defaultColorMode?: ColorMode
	addGlobalCSS?: boolean
	theme?: DeepPartial<BaseTheme>
	children?: React.ReactNode
}

export const RobinProvider: React.FC<Props> = props => {
	const {
		colorMode: fixedColorMode,
		defaultColorMode = 'system',
		addGlobalCSS = true,
		theme,
		children
	} = props
	const [fontLoaded, setFontLoaded] = useState(false)
	const [colorMode] = useColorMode(defaultColorMode)
	const reducedMotion = useReducedMotion()

	useEffect(() => {
		if (document.fonts) {
			document.fonts.onloadingdone = () => setFontLoaded(true)
		}
	}, [])

	return (
		<ThemeProvider colorMode={fixedColorMode || colorMode} theme={theme}>
			{addGlobalCSS && <Global />}
			{fontLoaded && !reducedMotion ? (
				<LazyMotion features={domAnimation}>{children}</LazyMotion>
			) : (
				children
			)}
		</ThemeProvider>
	)
}
