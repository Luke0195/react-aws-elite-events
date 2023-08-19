class Validators {
  isString(value: any): boolean {
    return typeof value === 'string'
  }
}

export default new Validators()
