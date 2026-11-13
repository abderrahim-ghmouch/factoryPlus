import { render, screen, fireEvent } from '@testing-library/react'
import Search from '../components/search'

describe('Search', () => {
  test('shows the current search text', () => {
    render(
      <Search Searched="robot" SetSearch={() => {}} statusFilter="all" setStatusFilter={() => {}} />
    )
    expect(screen.getByPlaceholderText('Rechercher une machine...')).toHaveValue('robot')
  })

  test('calls SetSearch with the typed text', () => {
    const SetSearch = jest.fn()
    render(
      <Search Searched="" SetSearch={SetSearch} statusFilter="all" setStatusFilter={() => {}} />
    )
    fireEvent.change(screen.getByPlaceholderText('Rechercher une machine...'), {
      target: { value: 'presse' },
    })
    expect(SetSearch).toHaveBeenCalledWith('presse')
  })

  test('passes status changes to setStatusFilter', () => {
    const setStatusFilter = jest.fn()
    render(
      <Search Searched="" SetSearch={() => {}} statusFilter="all" setStatusFilter={setStatusFilter} />
    )
    fireEvent.change(screen.getByRole('combobox'), { target: { value: "À l'arrêt" } })
    expect(setStatusFilter).toHaveBeenCalledWith("À l'arrêt")
  })
})
