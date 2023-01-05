import { generateShades } from './color'

describe('color', () => {
  it('should generate color shades from a base color', () => {
    const shades = generateShades('#ff0000')
    expect(shades).toEqual([
      '#ffe5d6',
      '#ffbca1',
      '#ff916e',
      '#ff613d',
      '#ff0902',
      '#e00000',
      '#ad0000',
      '#7d0000',
      '#500700',
      '#290400'
    ])
  })

  it('should generate 5 shades', () => {
    const shades = generateShades('#ff0000', 5)
    expect(shades).toEqual(['#ffcaaf', '#ff7049', '#dd3219', '#9e0000', '#440000'])
  })

  it('should generate 15 shades', () => {
    const shades = generateShades('#ff0000', 15)
    expect(shades).toEqual([
      '#ffefe5',
      '#ffd3c0',
      '#ffb79c',
      '#ff9c7c',
      '#ff7d5a',
      '#ff5b38',
      '#ff3116',
      '#ea0401',
      '#d30000',
      '#b30000',
      '#920000',
      '#710600',
      '#550d00',
      '#380c00',
      '#200200'
    ])
  })
})
