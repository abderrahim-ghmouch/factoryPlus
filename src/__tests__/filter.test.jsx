import { render, screen, fireEvent } from '@testing-library/react'
import Filter from '../components/filter'

describe('Filter', () => {
  test('renders all four status options', () => {
    render(<Filter value="all" onChange={() => {}} />)
    expect(screen.getByRole('option', { name: 'Toutes les machines' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'En fonctionnement' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'En panne' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: "À l'arrêt" })).toBeInTheDocument()
  })

  test('calls onChange with the selected value', () => {
    const onChange = jest.fn()
    render(<Filter value="all" onChange={onChange} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'En panne' } })
    expect(onChange).toHaveBeenCalledWith('En panne')
  })
})
