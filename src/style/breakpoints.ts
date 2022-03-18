import type { RUITheme } from './theme'

type Breakpoint = keyof RUITheme['breakpoints']

const createMediaCss = (breakpoint: Breakpoint) => (props: { theme: RUITheme }) =>
	`@media screen and (max-width: ${props.theme.breakpoints[breakpoint] - 1}px)`

export default {
	sm: createMediaCss('sm'),
	md: createMediaCss('md'),
	lg: createMediaCss('lg'),
	xl: createMediaCss('xl')
}
