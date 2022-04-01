import styled from '@rui/style'

interface TagContainerProps {
	$color: string
	$outlined: boolean
	$pill: boolean
}

export const TagContainer = styled.span<TagContainerProps>`
	display: inline-flex;
	align-items: center;
	padding: 0.4rem 0.8rem;
	overflow: hidden;
	font-family: ${props => props.theme.typography.fontFamily};
	font-size: 1.5rem;
	font-weight: 600;
	line-height: 1em;
	color: ${props => props.theme.utils.getColor(props.$color)};
	text-overflow: ellipsis;
	white-space: nowrap;
	background: ${props => props.theme.utils.getColorAlpha(props.$color, 0.1)};
	border: solid 0.1rem
		${props => (props.$outlined ? props.theme.utils.getColor(props.$color) : 'transparent !important')};
	border-radius: ${props => (props.$pill ? '1em' : props.theme.borderRadius)};

	&::before {
		content: '\\200b';
	}

	& svg {
		width: auto;
		height: 1.2em;
	}
`
