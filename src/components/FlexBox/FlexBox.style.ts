import React from 'react'
import styled from 'style'

interface FlexBoxContainerProps {
	$direction: React.CSSProperties['flexDirection']
	$alignItems: React.CSSProperties['alignItems']
	$justifyContent: React.CSSProperties['justifyContent']
	$spacing: string
	$wrap: boolean
}

export const FlexBoxContainer = styled.div<FlexBoxContainerProps>`
	display: flex;
	flex-direction: ${props => props.$direction};
	flex-wrap: ${props => (props.$wrap ? 'wrap' : 'nowrap')};
	gap: ${props => props.$spacing};
	align-items: ${props => props.$alignItems};
	justify-content: ${props => props.$justifyContent};
`
