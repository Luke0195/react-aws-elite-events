type EventStatusOptions = {
  [key: number]: string
}

export const eventStatusOptions: EventStatusOptions = {
  0: 'green',
  1: 'yellow',
  2: 'red',
  3: 'gray',
}

export function getCurrentCardType(value: number): string {
  return eventStatusOptions[value]
}
