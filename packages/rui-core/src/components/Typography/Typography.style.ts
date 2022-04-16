import type { SizeValue } from '@rui/types'
import styled from '@rui/styles'

interface TypographyProps {
	$variant: 'heading' | 'text' | 'label'
	$size: SizeValue
	$color: string
	$highlight: string
	$bold: boolean
	$italic: boolean
	$decoration: string
	$fontWeight?: number
}

export const StyledText = styled.div<TypographyProps>(
	({ theme, $variant, $size, $color, $decoration, $highlight, $fontWeight, $italic, $bold }) => ({
		margin: 0,
		fontFamily: theme.typography[$variant].fontFamily,
		fontWeight: $fontWeight || ($bold ? 'bold' : theme.typography[$variant].fontWeight),
		fontSize: theme.fn.getSize($size, theme.typography[$variant].fontSize),
		fontStyle: $italic ? 'italic' : 'normal',
		lineHeight: theme.fn.getSize($size, theme.typography[$variant].lineHeight, false) || 'normal',
		color: theme.fn.getColor($color),
		textDecoration: $decoration,
		letterSpacing: 'normal',
		background: theme.fn.getColor($highlight),
		'& small': {
			fontSize: '0.7em'
		}
	})
)
