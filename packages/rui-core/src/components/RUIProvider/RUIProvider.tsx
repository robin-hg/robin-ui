import { ThemeProvider } from '@rui/theme'
import { LazyMotion, domAnimation } from 'framer-motion'

export interface Props extends React.ComponentProps<typeof ThemeProvider> {
	noMotion?: boolean
	addGlobalCSS?: boolean
}

export const RUIProvider: React.FC<Props> = props => {
	const { colorMode, forcedColorMode, noMotion, addGlobalCSS = true, theme, children } = props

	return (
		<ThemeProvider
			colorMode={colorMode}
			forcedColorMode={forcedColorMode}
			addGlobalCSS={addGlobalCSS}
			theme={theme}>
			{noMotion ? children : <LazyMotion features={domAnimation}>{children}</LazyMotion>}
		</ThemeProvider>
	)
}
