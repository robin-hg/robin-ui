import type { BaseTheme, ColorMode, DerrivedColorMode } from '@robin-ui/theme'
import { ThemeProvider } from '@robin-ui/theme'
import { useColorMode } from '@robin-ui/hooks'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Global } from './Global'

export interface Props {
	colorMode?: DerrivedColorMode
	defaultColorMode?: ColorMode
	addGlobalCSS?: boolean
	theme?: Partial<BaseTheme>
	children?: React.ReactNode
}

export const RobinProvider: React.FC<Props> = props => {
	const { colorMode: fixedColorMode, defaultColorMode = 'system', addGlobalCSS = true, theme, children } = props
	const [colorMode] = useColorMode(defaultColorMode)

	return (
		<ThemeProvider colorMode={fixedColorMode || colorMode} theme={theme}>
			{addGlobalCSS && <Global />}
			<LazyMotion features={domAnimation}>{children}</LazyMotion>
		</ThemeProvider>
	)
}
