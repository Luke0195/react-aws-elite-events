import validators from './index'
describe('Validators', () => {
  it('Should return a false if string is not provided', () => {
    const result = validators.isString(null)
    expect(result).toBe(false)
  })

  it('Should return true if a string is provided', () => {
    const result = validators.isString('any_string')
    expect(result).toBe(true)
  })
})
