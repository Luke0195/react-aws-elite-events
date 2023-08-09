import { EventCard } from './index'
import { render } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { parsedData } from './shared/mapper'

describe('EventCard Component', () => {
  it('Should render a empty string if no eventName is provided', () => {
    const event = {
      eventId: faker.number.int().toString(),
      eventName: null,
      eventDate: faker.date.future().toString(),
      eventType: faker.number.int({ min: 1, max: 4 }),
    }

    const parsed = parsedData(event)
    render(<EventCard event={parsed} />)
    expect(parsed.eventName).toBe('-')
  })

  it('Should render a empty string if no eventDate is provided', () => {
    const event = {
      eventId: faker.number.int().toString(),
      eventName: `Event ${faker.music.songName()}`,
      eventDate: null,
      eventType: faker.number.int({ min: 1, max: 4 }),
    }

    const parsed = parsedData(event)
    render(<EventCard event={parsed} />)
    expect(parsed.eventDate).toBe('-')
  })
})
