import { EventCard } from './index'
import { render, RenderResult } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { parsedData } from './shared/mapper'
import { Context } from '../../context'
import { EventProps } from './shared/protocols'

const makeSut = (parsed: EventProps): RenderResult => {
  return render(
    <Context>
      <EventCard event={parsed} />
    </Context>
  )
}

describe('EventCard Component', () => {
  it('Should render a empty string if no eventName is provided', () => {
    const event = {
      eventId: faker.number.int().toString(),
      eventName: null,
      eventDate: faker.date.toString(),
      eventType: faker.number.int({ min: 1, max: 4 }),
    }

    const parsed = parsedData(event)
    makeSut(parsed)
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
    makeSut(parsed)
    expect(parsed.eventDate).toBe('-')
  })

  it('Should render a zero if not eventType is provided', () => {
    const event = {
      eventId: faker.number.int().toString(),
      eventName: `Event ${faker.music.songName()}`,
      eventDate: faker.date.toString(),
      eventType: null,
    }
    const parsed = parsedData(event)
    makeSut(parsed)
    expect(parsed.eventType).toBe(0)
  })
})
