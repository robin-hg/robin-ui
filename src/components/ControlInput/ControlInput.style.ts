import styled from '@rui/style'
import BaseContainer from '@rui/components/BaseContainer'

interface ControlInputContainerpProps {
	$labelPosition: 'left' | 'right'
	$color: string
}

export const ControlInputContainer = styled(BaseContainer)<ControlInputContainerpProps>`
	display: inline-flex;
	flex-direction: ${props => (props.$labelPosition === 'right' ? 'row' : 'row-reverse')};
	align-items: baseline;
	cursor: ${props => (props.disabled ? 'default' : 'pointer')};
	user-select: none;

	& > label {
		margin-right: ${props => (props.$labelPosition === 'left' ? 0.8 : 0)}rem;
		margin-left: ${props => (props.$labelPosition === 'right' ? 0.8 : 0)}rem;
	}
`

export const Control = styled.span`
	display: flex;
	align-items: center;

	&::before {
		content: '\\200b';
	}
`
