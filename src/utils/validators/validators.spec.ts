import { isString } from './index'
describe('Validators', () => {
  it('Should return a false if string is not provided', () => {
    const result = isString(null)
    expect(result).toBe(false)
  })

  it('Should return true if a string is provided', () => {
    const result = isString('any_string')
    expect(result).toBe(true)
  })
})
