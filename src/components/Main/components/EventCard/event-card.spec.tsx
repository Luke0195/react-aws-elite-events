import { EventCard } from './index'
import { render } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { parsedData } from './shared/mapper'

describe('EventCard Component', () => {
  it('Should render a empty string if no eventId is provided', () => {
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
})
