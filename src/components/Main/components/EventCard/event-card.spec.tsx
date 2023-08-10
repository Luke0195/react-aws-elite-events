import { EventCard } from './index'
import { render } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { parsedData } from './shared/mapper'
import { Context } from '../../context'

describe('EventCard Component', () => {
  it('Should render a empty string if no eventName is provided', () => {
    const event = {
      eventId: faker.number.int().toString(),
      eventName: null,
      eventDate: faker.date.future().toString(),
      eventType: faker.number.int({ min: 1, max: 4 }),
    }

    const parsed = parsedData(event)
    render(
      <Context>
        <EventCard event={parsed} />
      </Context>
    )
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
    render(
      <Context>
        <EventCard event={parsed} />
      </Context>
    )
    expect(parsed.eventDate).toBe('-')
  })

  it('Should render a zero if not eventType is provided', () => {
    const event = {
      eventId: faker.number.int().toString(),
      eventName: `Event ${faker.music.songName()}`,
      eventDate: faker.date.future().toString(),
      eventType: null,
    }
    const parsed = parsedData(event)
    render(
      <Context>
        <EventCard event={parsed} />
      </Context>
    )
    expect(parsed.eventType).toBe(0)
  })
})
