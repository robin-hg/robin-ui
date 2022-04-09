import { ThemeProvider } from '@rui/theme'

export interface Props extends React.ComponentProps<typeof ThemeProvider> {}

export const RUIProvider: React.FC<Props> = props => {
	const { colorMode, forcedColorMode, theme, children } = props

	return (
		<ThemeProvider colorMode={colorMode} forcedColorMode={forcedColorMode} theme={theme}>
			{children}
		</ThemeProvider>
	)
}
