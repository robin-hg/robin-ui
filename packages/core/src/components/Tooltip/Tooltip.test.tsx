import { act, fireEvent, render, screen } from '@robin-ui/test-utils'

import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('should render on hover', () => {
    render(
      <Tooltip label="Tooltip">
        <div>Trigger</div>
      </Tooltip>
    )
    const trigger = screen.getByText('Trigger')

    act(() => {
      fireEvent.pointerOver(trigger)
    })

    setTimeout(() => {
      expect(screen.getByText('Tooltip')).toBeVisible()
    }, 200)
  })
})
