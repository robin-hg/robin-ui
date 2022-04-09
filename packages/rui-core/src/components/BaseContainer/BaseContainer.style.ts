import styled from '@rui/styles'
import { pick } from '@rui/utils'

export const StyledBaseContainer = styled.div(props => ({
	...pick(props.theme.typography.text, ['fontFamily', 'fontWeight']),
	...props.theme.typography.text.sizes.md,
	color: props.theme.palette.background.onBase
}))
