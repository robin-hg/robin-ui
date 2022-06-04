import { ThemeProvider } from '@rui/theme'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Global } from './Global'

export interface Props extends React.ComponentProps<typeof ThemeProvider> {
	noMotion?: boolean
	addGlobalCSS?: boolean
}

export const RUIProvider: React.FC<Props> = props => {
	const { colorMode, forcedColorMode, noMotion, addGlobalCSS = true, theme, children } = props

	return (
		<ThemeProvider colorMode={colorMode} forcedColorMode={forcedColorMode} theme={theme}>
			{addGlobalCSS && <Global />}
			{noMotion ? children : <LazyMotion features={domAnimation}>{children}</LazyMotion>}
		</ThemeProvider>
	)
}
