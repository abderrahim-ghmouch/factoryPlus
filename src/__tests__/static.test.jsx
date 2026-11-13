import { render, screen } from '@testing-library/react'
import Static from '../components/static'
import { machines } from './fixtures'

describe('Static', () => {
  test('counts machines with the given status', () => {
    render(<Static machine={machines} status="En fonctionnement" />)
    expect(screen.getByRole('heading', { name: 'En fonctionnement' })).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  test('shows 0 when no machine has the status', () => {
    render(<Static machine={[]} status="En panne" />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
