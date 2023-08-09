import * as formmaters from './index'

describe('Formatters', () => {
  it('Should return a string if a null value is provided', () => {
    const result = formmaters.notEmptyStringOfDefault(null)
    expect(result).toBe('-')
  })

  it('Should return the same value is provided', () => {
    const result = formmaters.notEmptyStringOfDefault('any_value')
    expect(result).toBe('any_value')
  })
})
