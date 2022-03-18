import { css } from './index'

export default css`
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
	}
`
