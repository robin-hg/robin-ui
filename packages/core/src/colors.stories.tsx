import type { Meta } from '@storybook/react'
import { useTheme, useWidthQuery } from '@robin-ui/hooks'
import { sxc } from '@robin-ui/styles'

import { Grid, Stack, FlexBox, Text } from './'

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
											sx={{
												height: '8rem',
												width: '100%',
												background: colorHex,
												_sm: {
													width: '5rem',
													height: '5rem',
													minWidth: '5rem'
												}
											}}
										/>
										<div>
											<Text sx={{ textTransform: 'capitalize' }}>
												{colorName} {shade}
											</Text>
											<Text
												size="sm"
												sx={{
													textTransform: 'uppercase',
													userSelect: 'all'
												}}>
												{colorHex}
											</Text>
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
export const Default = () => <Colors />
