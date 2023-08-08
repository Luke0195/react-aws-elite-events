import { render, screen } from '@testing-library/react'

import { Form } from './index'

describe('Form Component', () => {
  it('Should render Heading with correct value', () => {
    render(<Form onClose={() => {}} />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.innerHTML).toBe('Create New Event')
  })

  it('Should start with form initial values', () => {
    render(<Form onClose={() => {}} />)
    const eventName = screen.getByPlaceholderText(
      'Enter with event name'
    ) as HTMLInputElement
    const eventType = screen.getByPlaceholderText(
      'Select Option'
    ) as HTMLInputElement

    const submibBtn = screen.getByRole('button', {
      name: /submit/i,
    }) as HTMLButtonElement
    expect(eventName.value).toBe('')
    expect(eventType.value).toBe('1')
    expect(submibBtn.disabled).toBe(true)
  })
})
