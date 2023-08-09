import { screen, render } from '@testing-library/react'
import { MainHeader } from './index'

describe('MainHeaderComponent', () => {
  it('Ensure render title to be render correctly', () => {
    render(<MainHeader />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.innerHTML).toBe(' Events ')
  })
})
