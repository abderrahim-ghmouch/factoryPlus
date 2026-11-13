import { render, screen } from '@testing-library/react'
import Card from '../components/card'
import { machines } from './fixtures'

describe('Card', () => {
  test('displays the machine information', () => {
    render(<Card {...machines[0]} />)
    expect(screen.getByRole('heading', { name: 'Robot de soudage' })).toBeInTheDocument()
    expect(screen.getByText('Atelier A')).toBeInTheDocument()
    expect(screen.getByText('125')).toBeInTheDocument()
  })

  test('uses the green style for "En fonctionnement"', () => {
    render(<Card {...machines[0]} />)
    expect(screen.getByText('En fonctionnement')).toHaveClass('bg-green-100')
  })

  test('uses the red style for "En panne"', () => {
    render(<Card {...machines[1]} />)
    expect(screen.getByText('En panne')).toHaveClass('bg-red-100')
  })

  test('uses the yellow style for any other status', () => {
    render(<Card {...machines[3]} />)
    expect(screen.getByText("À l'arrêt")).toHaveClass('bg-yellow-100')
  })
})
