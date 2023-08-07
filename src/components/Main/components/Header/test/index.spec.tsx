import { screen, render } from '@testing-library/react'
import { Ui } from '../ui/index'

describe('MainHeaderComponent', () => {
  it('Ensure render title to be render correctly', () => {
    render(<Ui />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.innerHTML).toBe(' Events ')
  })
})
