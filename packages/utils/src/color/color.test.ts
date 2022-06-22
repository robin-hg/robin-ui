import { generateShades } from './color'

describe('color', () => {
  it('should generate color shades from a base color', () => {
    const shades = generateShades('#ff0000')
    expect(shades).toEqual([
      '#ffd8bd',
      '#ffad88',
      '#ff7e55',
      '#ff4121',
      '#ff0000',
      '#e00000',
      '#ad0000',
      '#7d0000',
      '#500700',
      '#290400'
    ])
  })

  it('should generate 5 shades', () => {
    const shades = generateShades('#ff0000', 5)
    expect(shades).toEqual(['#ffe1c5', '#ff875d', '#ff0000', '#b60000', '#581000'])
  })

  it('should generate 15 shades', () => {
    const shades = generateShades('#ff0000', 15)
    expect(shades).toEqual([
      '#ffd2b7',
      '#ffb593',
      '#ff9670',
      '#ff7850',
      '#ff512e',
      '#ff0000',
      '#ff0000',
      '#ff0000',
      '#c60000',
      '#a70000',
      '#860000',
      '#660000',
      '#4b0100',
      '#300200',
      '#1b0000'
    ])
  })
})
