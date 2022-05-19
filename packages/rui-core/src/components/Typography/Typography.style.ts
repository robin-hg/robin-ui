import type { SizeValue, ColorToken } from '@rui/types'
import styled from '@rui/styles'
import { parseSize } from '@rui/utils'

interface StyledTextProps {
	$variant: 'heading' | 'text' | 'label'
	$size: SizeValue
	$color: ColorToken
	$highlight: ColorToken
	$bold: boolean
	$italic: boolean
	$decoration: string
	$fontSize?: string | number
	$fontWeight?: number
}

export const StyledText = styled.div<StyledTextProps>(
	({ theme, $variant, $size, $color, $decoration, $highlight, $fontSize, $fontWeight, $italic, $bold }) => ({
		display: 'inline-block',
		margin: 0,
		fontFamily: theme.typography[$variant].fontFamily,
		fontWeight: $fontWeight ?? ($bold ? 'bold' : theme.typography[$variant].fontWeight),
		fontSize: $fontSize ? parseSize($fontSize) : theme.fn.getSize($size, theme.typography[$variant].fontSize),
		fontStyle: $italic ? 'italic' : 'normal',
		lineHeight: theme.fn.getSize($size, theme.typography[$variant].lineHeight, false) ?? 'normal',
		color: theme.fn.getColor($color),
		textDecoration: $decoration,
		letterSpacing: 'normal',
		background: theme.fn.getColor($highlight),
		'& small': {
			fontSize: '0.7em'
		}
	})
)
