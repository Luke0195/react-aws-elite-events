import { render, screen } from '@testing-library/react'
import { Form } from './index'

describe('Form Component', () => {
  it('Should render Heading with correct value', () => {
    render(<Form />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.innerHTML).toBe('Create New Event')
  })
})
