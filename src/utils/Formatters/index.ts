export function notEmptyStringOfDefault(value: any): string {
  return value === null || value === '' ? '-' : value.trim()
}
