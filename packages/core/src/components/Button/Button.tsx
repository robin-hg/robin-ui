import { forwardRef, useContext } from 'react'

import type { ColorToken, DefaultProps, Size, SizeValue } from '@robin-ui/types'

import { ButtonGroupContext } from '../ButtonGroup'

import { Content, Item, StyledButton } from './Button.style'

export interface Props extends DefaultProps<HTMLButtonElement, 'size' | 'type'> {
  /**
   * Button variant
   * @default flat
   */
  variant?: 'flat' | 'faded' | 'outlined' | 'text' | 'gradient'
  /**
   * Button size
   * @default md
   */
  size?: Size
  radius?: SizeValue
  /**
   * Button color
   * @default primary
   */
  color?: ColorToken
  gradient?: string[] | { colors: string[]; deg?: number }
  leftAdornment?: React.ReactNode
  rightAdornment?: React.ReactNode
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  as?: React.ElementType
}

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    as,
    variant = 'flat',
    size = 'md',
    color = 'primary',
    gradient,
    radius = 'sm',
    leftAdornment,
    rightAdornment,
    disabled,
    onClick,
    children,
    href,
    ...otherProps
  } = props
  const { groupVariant, groupColor, groupSize } = useContext(ButtonGroupContext)

  return (
    <StyledButton
      ref={ref}
      as={as ?? (href ? 'a' : 'button')}
      $variant={groupVariant ?? variant}
      $color={groupColor ?? color}
      $size={groupSize ?? size}
      $radius={radius}
      $gradient={Array.isArray(gradient) ? { colors: gradient } : gradient}
      type="button"
      onClick={event => {
        if (disabled) {
          event.preventDefault()
          return
        }
        onClick?.(event)
      }}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      href={href}
      {...otherProps}>
      <Content disableResizeHeight>
        {leftAdornment && <Item $position={children ? 'start' : undefined}>{leftAdornment}</Item>}
        <Item>{children}</Item>
        {rightAdornment && <Item $position={children ? 'end' : undefined}>{rightAdornment}</Item>}
      </Content>
    </StyledButton>
  )
})

Button.displayName = 'Button'
