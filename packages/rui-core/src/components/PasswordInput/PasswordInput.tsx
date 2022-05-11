import React, { useState } from 'react'

import { TextInput } from '../TextInput'
import { Button } from '../Button'
import { Eye, EyeOff } from '@rui/icons'

export interface Props extends Omit<React.ComponentProps<typeof TextInput>, 'children' | 'rightAdornment' | 'type'> {}

export const PasswordInput = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { ...otherProps } = props
	const [hidden, setHidden] = useState(true)

	return (
		<TextInput
			ref={ref}
			rightAdornment={
				<Button
					size="xs"
					variant="text"
					color="inherit"
					onClick={() => setHidden(!hidden)}
					aria-hidden="true"
					tabIndex={-1}>
					{hidden ? <Eye /> : <EyeOff />}
				</Button>
			}
			type={hidden ? 'password' : 'text'}
			{...otherProps}
		/>
	)
})

PasswordInput.displayName = 'PasswordInput'
