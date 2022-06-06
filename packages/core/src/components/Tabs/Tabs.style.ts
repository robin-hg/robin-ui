import styled from '@robin-ui/styles'
import { Button } from '../Button'

export const TabGroup = styled.div(({ theme }) => ({
	width: '100%',
	borderBottom: `solid 0.2rem ${theme.palette.outline}`
}))

interface TabProps {
	$active: boolean
}

export const Tab = styled(Button)<TabProps>(({ $active }) => ({
	marginBottom: '-0.2rem',
	borderBottom: `solid 0.2rem ${$active ? 'currentColor' : 'transparent'}`
}))
