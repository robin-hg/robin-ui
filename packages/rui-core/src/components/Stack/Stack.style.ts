import styled from '@rui/styles'
import { FlexBox } from '../FlexBox'

export const StackContainer = styled(FlexBox)(
	({ direction }) =>
		(direction === 'column' || direction === 'column-reverse') && {
			'& > *': {
				width: '100%'
			}
		}
)
