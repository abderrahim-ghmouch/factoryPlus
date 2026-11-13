import { render, screen } from '@testing-library/react'
import Dashboard from '../pages/dashboard'
import { machines } from './fixtures'

describe('Dashboard', () => {
  test('shows one counter per status with the right totals', () => {
    render(<Dashboard machine={machines} />)
    expect(screen.getByRole('heading', { name: 'En panne' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'En fonctionnement' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "À l'arrêt" })).toBeInTheDocument()
    // 1 en panne, 2 en fonctionnement, 1 à l'arrêt
    expect(screen.getByRole('heading', { name: 'En fonctionnement' }).nextSibling).toHaveTextContent('2')
    expect(screen.getByRole('heading', { name: 'En panne' }).nextSibling).toHaveTextContent('1')
  })
})
