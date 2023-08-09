import { isString } from '../validators'

export function notEmptyStringOfDefault(value: any): string {
  return isString(value) && value !== '' ? value.trim() : '-'
}

export function numberOrDefault(value: any): number {
  return value === null ? 0 : value
}
