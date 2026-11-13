import { render, screen, fireEvent } from '@testing-library/react'
import AddMachine from '../pages/addMachine'

describe('AddMachine form', () => {
  test('updates the name field while typing', () => {
    render(<AddMachine onadd={() => {}} />)
    const input = screen.getByPlaceholderText('Ex : Robot de soudage')
    fireEvent.change(input, { target: { value: 'Tour CNC' } })
    expect(input).toHaveValue('Tour CNC')
  })

  test('calls onadd with a machine in the machine.json shape on submit', () => {
    const onadd = jest.fn()
    render(<AddMachine onadd={onadd} />)

    fireEvent.change(screen.getByPlaceholderText('Ex : Robot de soudage'), {
      target: { value: '  Tour CNC  ' },
    })
    fireEvent.change(screen.getByDisplayValue('Atelier A'), { target: { value: 'Atelier B' } })
    fireEvent.change(screen.getByDisplayValue('En fonctionnement'), { target: { value: 'En panne' } })
    fireEvent.change(screen.getByPlaceholderText('0'), { target: { value: '150' } })
    fireEvent.click(screen.getByRole('button', { name: 'Ajouter' }))

    expect(onadd).toHaveBeenCalledTimes(1)
    expect(onadd).toHaveBeenCalledWith({
      id: expect.any(String),
      name: 'Tour CNC',
      zone: 'Atelier B',
      status: 'En panne',
      dailyProduction: 150,
    })
  })
})
