import type { Story, Meta } from '@storybook/react'
import { useTheme, useWidthQuery } from '@rui/hooks'
import { sxc } from '@rui/styles'

import { Grid, Stack, FlexBox } from './'
// import Typography from '@rui/components/Typography'

export default {
	title: 'Colors/Colors'
} as Meta

const Colors = () => {
	const { colors } = useTheme()
	const isMobile = useWidthQuery('sm')

	return (
		<Stack spacing="lg">
			{Object.entries(colors).map(([colorName, colorObj]) => (
				<div key={colorName}>
					<sxc.h3 sx={{ textTransform: 'capitalize' }}>{colorName}</sxc.h3>
					<Grid columns={{ xl: 10, md: 5, sm: 2 }} spacing="sm">
						{Object.entries(colorObj).map(
							([shade, colorHex]) =>
								shade !== '0' && (
									<FlexBox
										key={shade}
										direction={isMobile ? 'row' : 'column'}
										alignItems="flex-start"
										spacing="xs">
										<sxc.div
											sx={theme => ({
												height: '8rem',
												width: '100%',
												background: colorHex,
												[theme.media.sm]: {
													width: '5rem',
													height: '5rem',
													minWidth: '5rem'
												}
											})}
										/>
										<div>
											<sxc.p sx={{ textTransform: 'capitalize' }}>
												{colorName} {shade}
											</sxc.p>
											<sxc.span sx={{ textTransform: 'uppercase' }}>{colorHex}</sxc.span>
										</div>
									</FlexBox>
								)
						)}
					</Grid>
				</div>
			))}
		</Stack>
	)
}
const Template: Story = () => <Colors />
export const Default = Template.bind({})
