import { render, screen, fireEvent } from '@testing-library/react'
import Machines from '../pages/machines'
import { machines } from './fixtures'

// Machines has inline filtering (name search + status) and renders Search + Card.
describe('Machines page filtering', () => {
  test('shows all machines by default', () => {
    render(<Machines machine={machines} />)
    expect(screen.getByText('Robot de soudage')).toBeInTheDocument()
    expect(screen.getByText('Presse hydraulique')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(4)
  })

  test('filters by name, case-insensitive', () => {
    render(<Machines machine={machines} />)
    fireEvent.change(screen.getByPlaceholderText('Rechercher une machine...'), {
      target: { value: 'ROBOT' },
    })
    expect(screen.getByText('Robot de soudage')).toBeInTheDocument()
    expect(screen.queryByText('Presse hydraulique')).not.toBeInTheDocument()
  })

  test('filters by status', () => {
    render(<Machines machine={machines} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'En panne' } })
    expect(screen.getByText('Presse hydraulique')).toBeInTheDocument()
    expect(screen.queryByText('Robot de soudage')).not.toBeInTheDocument()
  })
})
