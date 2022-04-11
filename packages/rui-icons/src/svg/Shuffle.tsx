import createIcon from '../createIcon'
import { sxc } from '@rui/styles'

export default createIcon(
	<sxc.svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round">
		<polyline points="16 3 21 3 21 8"></polyline>
		<line x1="4" y1="20" x2="21" y2="3"></line>
		<polyline points="21 16 21 21 16 21"></polyline>
		<line x1="15" y1="15" x2="21" y2="21"></line>
		<line x1="4" y1="4" x2="9" y2="9"></line>
	</sxc.svg>
)