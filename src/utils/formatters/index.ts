import validators from '@/utils/validators'

class Formatters {
  notEmptyStringOfDefault(value: any): string {
    return validators.isString(value) && value !== '' ? value.trim() : '-'
  }

  numberOrDefault(value: any): number {
    return value === null ? 0 : value
  }
}

export default new Formatters()
