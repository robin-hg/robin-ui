import styled from 'style'
import { getColor, getColorVariant } from 'utils/color'

interface TagContainerProps {
	$color: string
	$size: 'sm' | 'md'
	$outlined: boolean
	$pill: boolean
}

export const TagContainer = styled.span<TagContainerProps>`
	display: inline-flex;
	align-items: center;
	padding: ${props => (props.$size === 'sm' ? '0.4rem 0.8rem' : '0.8rem 1.2rem')};
	overflow: hidden;
	font-family: ${props => props.theme.typography.fontFamily};
	font-size: 1.5rem;
	font-weight: 600;
	line-height: 1em;
	color: ${props => getColor(props.theme, props.$color)};
	text-overflow: ellipsis;
	white-space: nowrap;
	background: ${props => getColorVariant(props.theme, props.$color, 'extraLight')};
	border: solid 0.1rem
		${props => (props.$outlined ? getColorVariant(props.theme, props.$color, 'light') : 'transparent !important')};
	border-radius: ${props => (props.$pill ? '1em' : props.theme.borderRadius)};

	&::before {
		content: '\\200b';
	}

	& svg {
		width: auto;
		height: 1.2em;
	}
`
