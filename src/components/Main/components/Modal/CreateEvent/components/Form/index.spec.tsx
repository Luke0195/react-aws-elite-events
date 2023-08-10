import { render, screen } from '@testing-library/react'
import { Context } from '../../../../../context'
import { Form } from './index'

describe('Form Component', () => {
  it('Should render Heading with correct value', () => {
    render(
      <Context>
        <Form onClose={() => {}} />
      </Context>
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.innerHTML).toBe('Create New Event')
  })

  it('Should start with form initial values', () => {
    render(
      <Context>
        <Form onClose={() => {}} />
      </Context>
    )
    const eventName = screen.getByPlaceholderText(
      'Enter with event name'
    ) as HTMLInputElement
    const eventType = screen.getByPlaceholderText(
      'Select Option'
    ) as HTMLInputElement
    const submibBtn = screen.getByRole('button', {
      name: /submit/i,
    }) as HTMLButtonElement
    const cancelBtn = screen.getByRole('button', {
      name: /cancel/i,
    }) as HTMLButtonElement
    expect(eventName.value).toBe('')
    expect(eventType.value).toBe('1')
    expect(submibBtn.disabled).toBe(true)
    expect(cancelBtn.disabled).toBe(false)
  })
})
