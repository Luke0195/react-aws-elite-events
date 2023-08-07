import { render, screen } from '@testing-library/react'
import { Header } from './index'

describe('Header Component', () => {
  it('Ensure Header component be render with a correct title', () => {
    render(<Header />)
    const title = screen.getByRole('heading', { level: 3 })
    expect(title.innerHTML).toBe('Elite-Events')
  })
})
