import type { SizeValue } from '@rui/types'
import styled from '@rui/styles'

interface StyledTableCaptionProps {
	$align?: 'left' | 'center' | 'right'
	$padding?: SizeValue | SizeValue[]
	$captionSide: 'top' | 'bottom'
}

export const StyledTableCaption = styled.caption<StyledTableCaptionProps>(
	({ theme, $align, $padding, $captionSide }) => ({
		padding: $padding && theme.fn.getSpacing($padding),
		color: theme.fn.getAlphaColor('surface.onBase', 'fadedOnBase'),
		fontSize: theme.typography.label.fontSize.lg,
		textAlign: $align || 'left',
		captionSide: $captionSide
	})
)
