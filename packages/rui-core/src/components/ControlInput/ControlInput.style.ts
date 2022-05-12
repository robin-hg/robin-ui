import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'

interface ControlInputContainerpProps {
	$labelPosition: 'left' | 'right'
}

export const ControlInputContainer = styled(BaseContainer)<ControlInputContainerpProps>(
	({ theme, $labelPosition }) => ({
		display: 'inline-flex',
		flexDirection: $labelPosition === 'right' ? 'row' : 'row-reverse',
		alignItems: 'center',
		cursor: 'pointer',
		userSelect: 'none',
		'&[disabled]': {
			cursor: 'default !important',
			color: theme.fn.getAlphaColor('surface.onBase', 'fadedOnBase')
		},
		'& > label': {
			paddingLeft: $labelPosition === 'right' ? theme.spacing.sm : 0,
			paddingRight: $labelPosition === 'left' ? theme.spacing.sm : 0,
			cursor: 'inherit'
		}
	})
)

export const Control = styled.span({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	'& input': {
		cursor: 'inherit'
	}
})
