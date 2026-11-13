import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Nav from '../components/nav'

describe('Nav', () => {
  test('renders the navigation links', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: 'dashboard' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'machines' })).toHaveAttribute('href', '/machines')
    expect(screen.getByRole('link', { name: 'new machine' })).toHaveAttribute('href', '/add')
  })

  test('renders the logo', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
