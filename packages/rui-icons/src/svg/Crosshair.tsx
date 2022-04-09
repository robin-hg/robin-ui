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
		<circle cx="12" cy="12" r="10"></circle>
		<line x1="22" y1="12" x2="18" y2="12"></line>
		<line x1="6" y1="12" x2="2" y2="12"></line>
		<line x1="12" y1="6" x2="12" y2="2"></line>
		<line x1="12" y1="22" x2="12" y2="18"></line>
	</sxc.svg>
)
