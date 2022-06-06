import createIcon from '../createIcon'
import { sxc } from '@robin-ui/styles'

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
		<polyline points="20 12 20 22 4 22 4 12"></polyline>
		<rect x="2" y="7" width="20" height="5"></rect>
		<line x1="12" y1="22" x2="12" y2="7"></line>
		<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
		<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
	</sxc.svg>
)
