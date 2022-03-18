import type { Story, Meta } from '@storybook/react'
import styled from 'style'
import { getContrastColor } from 'utils/color'

import { Grid, Typography } from 'index'

import * as colors from './colors'

export default {
	title: 'Colors/Colors'
} as Meta

const ColorGroup = styled.div`
	display: flex;
	flex-direction: column;

	& > p {
		padding: 1rem 1rem 0.5rem;
		margin-bottom: 0;
	}
`

interface ColorBlockProps {
	color: string
}

const ColorBlock = styled.div<ColorBlockProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	color: ${props => getContrastColor(props.theme, props.color)};
	background: ${props => props.color};

	& small {
		font-weight: ${props => props.theme.typography.fontWeights.body};
	}
`

const aliases: Record<string, string> = {
	100: 'extraLight',
	300: 'light',
	500: 'base',
	700: 'dark',
	900: 'extraDark'
}

const Template: Story = () => (
	<Grid columns={{ xl: 3, sm: 1 }}>
		{Object.entries(colors).map(([colorName, colorObj]) => (
			<ColorGroup key={colorName}>
				<Typography highlight={colorObj[500]} bold>
					{colorName}
				</Typography>
				{Object.entries(colorObj)
					.filter(([weight]) => !Object.values(aliases).includes(weight))
					.map(([weight, color]) => (
						<ColorBlock key={weight} color={color}>
							<Typography color="inherit" bold>
								{weight}
								<small> {aliases[weight]}</small>
							</Typography>
							<Typography color="inherit" bold>
								{color}
							</Typography>
						</ColorBlock>
					))}
			</ColorGroup>
		))}
	</Grid>
)
export const Default = Template.bind({})
Default.storyName = 'Colors'
