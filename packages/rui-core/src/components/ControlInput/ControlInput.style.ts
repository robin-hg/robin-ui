import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'

interface ControlInputContainerpProps {
	$labelPosition: 'left' | 'right'
}

export const ControlInputContainer = styled(BaseContainer)<ControlInputContainerpProps>(
	({ theme, $labelPosition }) => ({
		display: 'inline-flex',
		flexDirection: $labelPosition === 'right' ? 'row' : 'row-reverse',
		gap: theme.spacing.sm,
		alignItems: 'baseline',
		cursor: 'pointer',
		userSelect: 'none',
		'&[disabled]': {
			cursor: 'default !important',
			color: theme.fn.getAlphaColor('surface.onBase', 'disabledOnBase')
		},
		'& > label': {
			cursor: 'inherit'
		}
	})
)

export const Control = styled.span({
	display: 'flex',
	alignItems: 'center',
	'&::before': {
		content: '"\\200b"'
	}
})
