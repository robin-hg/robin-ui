import styled from '@rui/styles'
import { InputBox } from '../InputBox'

export const SelectBox = styled(InputBox)(({ theme, active, disabled, readOnly }) => ({
	outline: 'none',
	cursor: disabled || readOnly ? 'default' : 'pointer',
	userSelect: 'none',
	'& > input': {
		pointerEvents: 'none'
	},
	'& > select': {
		appearance: 'none',
		pointerEvents: readOnly ? 'none' : 'auto'
	},
	'& > span > svg': {
		transition: theme.fn.getTransition(),
		transform: `rotate(${!disabled && active ? 180 : 0}deg)`,
		color: 'inherit'
	},
	'&:focus': {
		'& > input': {
			borderColor: theme.palette.primary.base
		}
	}
}))
