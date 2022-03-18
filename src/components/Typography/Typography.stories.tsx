import type { Story, Meta } from '@storybook/react'
import { lightTheme as theme } from 'style/theme'

import Typography, { type Props } from './Typography'
import { Divider } from 'index'

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

export const Variants = () => (
	<div>
		<Typography variant="h1">
			H1. Headline1 <small>- {theme.typography.fontSizes.h1}</small>
		</Typography>
		<Typography variant="h2">
			H2. Headline3 <small>- {theme.typography.fontSizes.h2}</small>
		</Typography>
		<Typography variant="h3">
			H3. Headline2 <small>- {theme.typography.fontSizes.h3}</small>
		</Typography>
		<Typography variant="h4">
			H4. Headline2 <small>- {theme.typography.fontSizes.h4}</small>
		</Typography>
		<Typography variant="h5">
			H5. Headline2 <small>- {theme.typography.fontSizes.h5}</small>
		</Typography>
		<Typography variant="h6">
			Subtitle1 <small>- {theme.typography.fontSizes.h6}</small>
		</Typography>
		<Typography variant="subtitle1">
			Subtitle1 <small>- {theme.typography.fontSizes.subtitle1}</small>
		</Typography>
		<Typography variant="subtitle2">
			Subtitle2 <small>- {theme.typography.fontSizes.subtitle2}</small>
		</Typography>
		<Typography variant="body1">
			Body1 <small>- {theme.typography.fontSizes.body1}</small>
		</Typography>
		<Typography variant="body2">
			Body2 <small>- {theme.typography.fontSizes.body2}</small>
		</Typography>
		<Typography variant="caption">
			Caption <small>- {theme.typography.fontSizes.caption}</small>
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
