import styled from '@rui/styles'

interface StyledTableSectionProps {
	$variant: 'thead' | 'tbody' | 'tfoot'
}

export const StyledTableSection = styled.tbody<StyledTableSectionProps>(
	({ theme, $variant }) =>
		({
			thead: {
				'& tr th': {
					borderBottom: `solid 0.1rem ${theme.palette.outline}`
				}
			},
			tbody: {
				'& tr:not(:last-of-type) td': {
					borderBottom: `solid 0.1rem ${theme.palette.outline}`
				}
			},
			tfoot: {
				'& tr th': {
					borderTop: `solid 0.1rem ${theme.palette.outline}`
				}
			}
		}[$variant])
)
