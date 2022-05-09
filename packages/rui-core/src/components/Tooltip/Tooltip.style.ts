import styled from '@rui/styles'
import { Floating } from '../Floating'

export const TooltipContainer = styled(Floating)(({ theme }) => ({
	fontSize: theme.typography.label.fontSize.lg
}))
