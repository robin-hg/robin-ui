import styled from '@rui/styles'
import { FlexBox } from '../FlexBox'

export const StackContainer = styled(FlexBox)({
	['& > *']: {
		width: '100%'
	}
})
