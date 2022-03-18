import styled from 'style'
import { BaseContainer } from 'index'

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
`

interface ControlProps {
	$labelPosition: 'left' | 'right'
}

export const Control = styled.span<ControlProps>`
	display: flex;
	align-items: center;
	margin-right: ${props => (props.$labelPosition === 'right' ? 0.6 : 0)}em;
	margin-left: ${props => (props.$labelPosition === 'left' ? 0.6 : 0)}em;

	&::before {
		content: '\\200b';
	}
`
