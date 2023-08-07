import { screen, render } from '@testing-library/react'
import { Header } from '../index'

describe('MainHeaderComponent', () => {
  it('Ensure render title to be render correctly', () => {
    render(<Header />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.innerHTML).toBe(' Events ')
  })
})
