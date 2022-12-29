import { forwardRef, useState } from 'react'

import { Eye, EyeOff } from '@robin-ui/icons'

import { IconButton } from '../IconButton'
import { TextInput } from '../TextInput'

export interface Props
  extends Omit<React.ComponentProps<typeof TextInput>, 'children' | 'rightAdornment' | 'type'> {}

export const PasswordInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { ...otherProps } = props
  const [hidden, setHidden] = useState(true)

  return (
    <TextInput
      ref={ref}
      rightAdornment={
        <IconButton
          variant="text"
          color="inherit"
          onClick={() => setHidden(!hidden)}
          aria-hidden
          tabIndex={-1}>
          {hidden ? <Eye /> : <EyeOff />}
        </IconButton>
      }
      type={hidden ? 'password' : 'text'}
      {...otherProps}
    />
  )
})

PasswordInput.displayName = 'PasswordInput'
