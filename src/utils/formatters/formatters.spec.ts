import formmaters from './index'

describe('Formatters', () => {
  it('Should return a string if a null value is provided', () => {
    const result = formmaters.notEmptyStringOfDefault('')
    expect(result).toBe('-')
  })

  it('Should return the same value is provided', () => {
    const result = formmaters.notEmptyStringOfDefault('any_value')
    expect(result).toBe('any_value')
  })

  it('Should return a zero if a null value is provided', () => {
    const result = formmaters.numberOrDefault(null)
    expect(result).toBe(0)
  })

  it('Should return a value if a value is provided', () => {
    const result = formmaters.numberOrDefault(30)
    expect(result).toBe(30)
  })
})
