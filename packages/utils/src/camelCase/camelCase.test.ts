import { camelCase } from './camelCase'

describe('camelCase', () => {
	it('should convert strings to camelCase', () => {
		expect(camelCase('string with spaces')).toBe('stringWithSpaces')
		expect(camelCase('string-with-kebab')).toBe('stringWithKebab')
		expect(camelCase('string_with_underscore')).toBe('stringWithUnderscore')
		expect(camelCase('string-with_mixed')).toBe('stringWithMixed')
	})
})
