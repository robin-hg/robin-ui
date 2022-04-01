import type { Story, Meta } from '@storybook/react'
import styled from '@rui/style'

import Typography, { type Props } from './Typography'
import Divider from '@rui/components/Divider'

export default {
	title: 'Display/Typography',
	component: Typography,
	args: {
		children: 'Text'
	},
	argTypes: {
		fontSize: { control: { type: 'range', min: 8, max: 100, step: 1 } },
		fontWeight: { options: [400, 500, 600], control: { type: 'select' } },
		component: { control: false }
	}
} as Meta<Props>

const Template: Story<Props> = args => <Typography {...args} />

export const Default = Template.bind({})

interface LabelProps {
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption'
}

const Label = styled.small<LabelProps>`
	&::before {
		content: '- ${props => props.theme.typography.fontSizes[props.variant]}';
	}
`

export const Variants = () => (
	<div>
		<Typography variant="h1">
			H1. Headline1 <Label variant="h1" />
		</Typography>
		<Typography variant="h2">
			H2. Headline3 <Label variant="h2" />
		</Typography>
		<Typography variant="h3">
			H3. Headline3 <Label variant="h3" />
		</Typography>
		<Typography variant="h4">
			H4. Headline4 <Label variant="h4" />
		</Typography>
		<Typography variant="h5">
			H5. Headline5 <Label variant="h5" />
		</Typography>
		<Typography variant="h6">
			H6. Headline6 <Label variant="h6" />
		</Typography>
		<Typography variant="subtitle">
			Subtitle <Label variant="subtitle" />
		</Typography>
		<Typography variant="body">
			Body <Label variant="body" />
		</Typography>
		<Typography variant="caption">
			Caption <Label variant="caption" />
		</Typography>
		<Divider />
		<Typography bold>Bold</Typography>
		<Typography bold italic>
			Bold Italic
		</Typography>
		<Typography bold italic underline>
			Bold Italic Underline
		</Typography>
		<Typography bold italic strikethrough>
			Bold Italic Strikethrough
		</Typography>
	</div>
)
