import type { SizeValue } from '@rui/types'
import styled from '@rui/styles'

interface FlexBoxContainerProps {
	$direction: React.CSSProperties['flexDirection']
	$alignItems: React.CSSProperties['alignItems']
	$justifyContent: React.CSSProperties['justifyContent']
	$spacing: SizeValue | [SizeValue, SizeValue]
	$wrap: boolean
}

export const FlexBoxContainer = styled.div<FlexBoxContainerProps>(
	({ theme, $direction, $alignItems, $justifyContent, $spacing, $wrap }) => ({
		display: 'flex',
		flexDirection: $direction,
		flexWrap: $wrap ? 'wrap' : 'nowrap',
		gap: theme.fn.getSpacing($spacing),
		alignItems: $alignItems,
		justifyContent: $justifyContent
	})
)
