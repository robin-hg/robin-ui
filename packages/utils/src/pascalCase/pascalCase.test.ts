import { pascalCase } from './pascalCase'

describe('camelCase', () => {
  it('should convert strings to camelCase', () => {
    expect(pascalCase('string with spaces')).toBe('StringWithSpaces')
    expect(pascalCase('string-with-kebab')).toBe('StringWithKebab')
    expect(pascalCase('string_with_underscore')).toBe('StringWithUnderscore')
    expect(pascalCase('string-with_mixed')).toBe('StringWithMixed')
  })
})
