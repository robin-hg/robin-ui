import styled from '@rui/styles'
import { InputBox } from '../InputBox'

export const SelectBox = styled(InputBox)(({ theme, active, disabled }) => ({
	outline: 'none',
	cursor: disabled ? 'default' : 'pointer',
	'& > input': {
		pointerEvents: 'none'
	},
	'& > span > svg': {
		transition: theme.fn.getTransition(),
		transform: `rotate(${!disabled && active ? 180 : 0}deg)`,
		color: 'inherit'
	},
	'&:focus': {
		'& > input': {
			borderColor: theme.fn.getColor('primary')
		}
	}
}))
