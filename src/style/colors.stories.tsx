import type { Story, Meta } from '@storybook/react'
import styled from '@rui/style'

import Grid from '@rui/components/Grid'
import Stack from '@rui/components/Stack'
import Typography from '@rui/components/Typography'

import * as colors from './colors'

export default {
	title: 'Colors/Colors'
} as Meta

const ColorGroup = styled.div`
	width: 100%;
`

interface ColorBlockProps {
	color: string
}

const ColorBlock = styled.div<ColorBlockProps>`
	& > div {
		height: 8rem;
		margin-bottom: 0.4rem;
		background: ${props => props.color};
	}

	& small {
		font-weight: ${props => props.theme.typography.fontWeights.body};
	}
`

const Template: Story = () => (
	<Stack spacing={24}>
		{Object.entries(colors).map(([colorName, colorObj]) => (
			<ColorGroup key={colorName}>
				<Typography variant="h4">{colorName}</Typography>
				<Grid columns={{ xl: 10, md: 5 }} spacing={8}>
					{Object.entries(colorObj).map(([weight, color]) => (
						<ColorBlock key={weight} color={color}>
							<div />
							<Typography bold>
								{colorName} {weight}
							</Typography>
							<Typography>{color}</Typography>
						</ColorBlock>
					))}
				</Grid>
			</ColorGroup>
		))}
	</Stack>
)
export const Default = Template.bind({})
Default.storyName = 'Colors'
