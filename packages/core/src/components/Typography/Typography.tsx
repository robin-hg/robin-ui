import type { ColorToken, DefaultProps, SizeValue } from '@robin-ui/types'
import React from 'react'

import { StyledText } from './Typography.style'

export interface Props extends DefaultProps<HTMLParagraphElement, 'size'> {
  size?: SizeValue
  fontSize?: string | number
  fontWeight?: number
  bold?: boolean
  color?: ColorToken
  highlight?: ColorToken
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  as?: React.ElementType
}

type Variant = 'heading' | 'text' | 'label' | 'code'

const variantComponentMap: Record<Variant, keyof JSX.IntrinsicElements> = {
  heading: 'h2',
  text: 'p',
  label: 'span',
  code: 'code'
}

const TypographyFactory = (variant: Variant) => {
  const Typography = React.forwardRef<HTMLParagraphElement, Props>((props, ref) => {
    const {
      as,
      size = 'md',
      fontSize,
      fontWeight,
      bold,
      color = 'inherit',
      highlight = 'none',
      italic,
      underline,
      strikethrough,
      children,
      ...otherProps
    } = props

    const decoration =
      `${underline ? 'underline' : ''} ${strikethrough ? 'line-through' : ''}`.trim() || 'none'
    const defaultComponent = as ?? variantComponentMap[variant]

    return (
      <StyledText
        ref={ref}
        as={defaultComponent}
        $variant={variant}
        $size={size}
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $bold={!!bold}
        $color={color}
        $highlight={highlight}
        $italic={!!italic}
        $decoration={decoration || 'none'}
        {...otherProps}>
        {children}
      </StyledText>
    )
  })

  Typography.displayName = 'Typography'

  return Typography
}

export const Text = TypographyFactory('text')
export const Heading = TypographyFactory('heading')
export const Label = TypographyFactory('label')
export const Code = TypographyFactory('code')
